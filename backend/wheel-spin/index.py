import json
import os
import psycopg2
from datetime import datetime, timezone

COOLDOWN_SECONDS = 24 * 60 * 60  # 24 часа


def handler(event: dict, context) -> dict:
    """
    Управление таймером колеса фортуны.
    GET ?user_id=... — возвращает оставшееся время до следующего бесплатного кручения
    POST {user_id} — фиксирует время кручения, возвращает ошибку если cooldown не прошёл
    """
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()

    method = event.get("httpMethod", "GET")

    if method == "GET":
        params = event.get("queryStringParameters") or {}
        user_id = params.get("user_id", "").strip()
        if not user_id:
            conn.close()
            return {"statusCode": 400, "headers": cors, "body": json.dumps({"error": "user_id required"})}

        cur.execute("SELECT last_free_spin FROM wheel_spins WHERE user_id = %s", (user_id,))
        row = cur.fetchone()
        conn.close()

        if not row:
            return {"statusCode": 200, "headers": cors, "body": json.dumps({"seconds_left": 0, "can_spin": True})}

        last_spin = row[0].replace(tzinfo=timezone.utc) if row[0].tzinfo is None else row[0]
        now = datetime.now(timezone.utc)
        elapsed = (now - last_spin).total_seconds()
        seconds_left = max(0, COOLDOWN_SECONDS - elapsed)

        return {"statusCode": 200, "headers": cors, "body": json.dumps({
            "seconds_left": int(seconds_left),
            "can_spin": seconds_left == 0,
        })}

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        user_id = str(body.get("user_id", "")).strip()
        if not user_id:
            conn.close()
            return {"statusCode": 400, "headers": cors, "body": json.dumps({"error": "user_id required"})}

        # Проверяем cooldown
        cur.execute("SELECT last_free_spin FROM wheel_spins WHERE user_id = %s", (user_id,))
        row = cur.fetchone()

        if row:
            last_spin = row[0].replace(tzinfo=timezone.utc) if row[0].tzinfo is None else row[0]
            elapsed = (datetime.now(timezone.utc) - last_spin).total_seconds()
            if elapsed < COOLDOWN_SECONDS:
                seconds_left = int(COOLDOWN_SECONDS - elapsed)
                conn.close()
                return {"statusCode": 429, "headers": cors, "body": json.dumps({
                    "error": "cooldown",
                    "seconds_left": seconds_left,
                    "can_spin": False,
                })}

        # Фиксируем время кручения
        cur.execute(
            """INSERT INTO wheel_spins (user_id, last_free_spin, updated_at)
               VALUES (%s, NOW(), NOW())
               ON CONFLICT (user_id) DO UPDATE SET last_free_spin = NOW(), updated_at = NOW()""",
            (user_id,)
        )
        conn.commit()
        conn.close()

        return {"statusCode": 200, "headers": cors, "body": json.dumps({
            "ok": True,
            "seconds_left": COOLDOWN_SECONDS,
            "can_spin": False,
        })}

    conn.close()
    return {"statusCode": 405, "headers": cors, "body": json.dumps({"error": "method not allowed"})}
