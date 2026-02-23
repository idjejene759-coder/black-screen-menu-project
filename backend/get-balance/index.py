import json
import os
import psycopg2


def get_db():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def handler(event, context):
    """Получение баланса пользователя"""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, X-User-Id",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    cors = {"Access-Control-Allow-Origin": "*"}

    if event.get("httpMethod") != "GET":
        return {"statusCode": 405, "headers": cors, "body": json.dumps({"error": "Method not allowed"})}

    headers = event.get("headers", {})
    user_id = headers.get("X-User-Id") or headers.get("x-user-id") or ""
    if not user_id:
        return {"statusCode": 401, "headers": cors, "body": json.dumps({"error": "Не указан пользователь"})}

    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute("SELECT balance FROM user_balances WHERE user_id = %s", (user_id,))
        row = cur.fetchone()
        balance = float(row[0]) if row else 0.0
    finally:
        conn.close()

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"balance": balance}),
    }
