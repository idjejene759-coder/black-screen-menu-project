import json
import os
import psycopg2


def get_db():
    return psycopg2.connect(os.environ["DATABASE_URL"])


CORS = {"Access-Control-Allow-Origin": "*"}


def handler(event, context):
    """Админ-панель: проверка админа, список игроков, блокировка, изменение баланса"""
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, X-User-Id, X-Auth-Token, X-Session-Id",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    qs = event.get("queryStringParameters") or {}
    action = qs.get("action", "")

    if action == "check":
        return handle_check(qs)
    elif action == "players":
        return handle_players(qs)
    elif action == "block":
        return handle_block(event)
    elif action == "unblock":
        return handle_unblock(event)
    elif action == "set_balance":
        return handle_set_balance(event)
    elif action == "stats":
        return handle_stats(qs)
    else:
        return {"statusCode": 400, "headers": CORS, "body": json.dumps({"error": "Unknown action"})}


def verify_admin(display_id):
    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute("SELECT id FROM admin_users WHERE display_id = %s", (int(display_id),))
        return cur.fetchone() is not None
    finally:
        conn.close()


def handle_check(qs):
    display_id = qs.get("display_id", "")
    if not display_id:
        return {"statusCode": 400, "headers": CORS, "body": json.dumps({"is_admin": False})}
    is_admin = verify_admin(display_id)
    return {"statusCode": 200, "headers": CORS, "body": json.dumps({"is_admin": is_admin})}


def handle_stats(qs):
    admin_id = qs.get("admin_id", "")
    if not admin_id or not verify_admin(admin_id):
        return {"statusCode": 403, "headers": CORS, "body": json.dumps({"error": "Нет доступа"})}

    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM users")
        total_users = cur.fetchone()[0]
        cur.execute("SELECT COUNT(*) FROM users WHERE is_blocked = true")
        blocked_users = cur.fetchone()[0]
        cur.execute("SELECT COALESCE(SUM(balance), 0) FROM user_balances")
        total_balance = float(cur.fetchone()[0])
        cur.execute("SELECT COUNT(*) FROM payments WHERE status = 'paid'")
        total_payments = cur.fetchone()[0]
    finally:
        conn.close()

    return {
        "statusCode": 200,
        "headers": CORS,
        "body": json.dumps({
            "total_users": total_users,
            "blocked_users": blocked_users,
            "total_balance": total_balance,
            "total_payments": total_payments,
        }),
    }


def handle_players(qs):
    admin_id = qs.get("admin_id", "")
    if not admin_id or not verify_admin(admin_id):
        return {"statusCode": 403, "headers": CORS, "body": json.dumps({"error": "Нет доступа"})}

    search = qs.get("search", "").strip()
    conn = get_db()
    try:
        cur = conn.cursor()
        if search:
            cur.execute(
                """SELECT u.id, u.display_id, u.name, u.telegram_id, u.is_blocked, u.created_at,
                          COALESCE(b.balance, 0) as balance
                   FROM users u
                   LEFT JOIN user_balances b ON b.user_id = CAST(u.id AS TEXT)
                   WHERE CAST(u.display_id AS TEXT) LIKE %s
                      OR LOWER(u.name) LIKE %s
                      OR u.telegram_id LIKE %s
                   ORDER BY u.created_at DESC
                   LIMIT 100""",
                (f"%{search}%", f"%{search.lower()}%", f"%{search}%"),
            )
        else:
            cur.execute(
                """SELECT u.id, u.display_id, u.name, u.telegram_id, u.is_blocked, u.created_at,
                          COALESCE(b.balance, 0) as balance
                   FROM users u
                   LEFT JOIN user_balances b ON b.user_id = CAST(u.id AS TEXT)
                   ORDER BY u.created_at DESC
                   LIMIT 100"""
            )
        rows = cur.fetchall()
        players = []
        for r in rows:
            players.append({
                "id": r[0],
                "display_id": r[1],
                "name": r[2] or "",
                "telegram_id": r[3] or "",
                "is_blocked": r[4],
                "created_at": r[5].isoformat() if r[5] else None,
                "balance": float(r[6]),
            })
    finally:
        conn.close()

    return {"statusCode": 200, "headers": CORS, "body": json.dumps({"players": players})}


def handle_block(event):
    body = json.loads(event.get("body") or "{}")
    admin_id = body.get("admin_id", "")
    user_id = body.get("user_id", "")
    if not admin_id or not verify_admin(admin_id):
        return {"statusCode": 403, "headers": CORS, "body": json.dumps({"error": "Нет доступа"})}
    if not user_id:
        return {"statusCode": 400, "headers": CORS, "body": json.dumps({"error": "user_id обязателен"})}

    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute("UPDATE users SET is_blocked = true WHERE id = %s", (int(user_id),))
        conn.commit()
    finally:
        conn.close()

    return {"statusCode": 200, "headers": CORS, "body": json.dumps({"ok": True})}


def handle_unblock(event):
    body = json.loads(event.get("body") or "{}")
    admin_id = body.get("admin_id", "")
    user_id = body.get("user_id", "")
    if not admin_id or not verify_admin(admin_id):
        return {"statusCode": 403, "headers": CORS, "body": json.dumps({"error": "Нет доступа"})}
    if not user_id:
        return {"statusCode": 400, "headers": CORS, "body": json.dumps({"error": "user_id обязателен"})}

    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute("UPDATE users SET is_blocked = false WHERE id = %s", (int(user_id),))
        conn.commit()
    finally:
        conn.close()

    return {"statusCode": 200, "headers": CORS, "body": json.dumps({"ok": True})}


def handle_set_balance(event):
    body = json.loads(event.get("body") or "{}")
    admin_id = body.get("admin_id", "")
    user_id = body.get("user_id", "")
    new_balance = body.get("balance")
    if not admin_id or not verify_admin(admin_id):
        return {"statusCode": 403, "headers": CORS, "body": json.dumps({"error": "Нет доступа"})}
    if not user_id:
        return {"statusCode": 400, "headers": CORS, "body": json.dumps({"error": "user_id обязателен"})}
    if new_balance is None:
        return {"statusCode": 400, "headers": CORS, "body": json.dumps({"error": "balance обязателен"})}

    new_balance = float(new_balance)
    conn = get_db()
    try:
        cur = conn.cursor()
        cur.execute(
            """INSERT INTO user_balances (user_id, balance, updated_at)
               VALUES (%s, %s, NOW())
               ON CONFLICT (user_id) DO UPDATE SET balance = %s, updated_at = NOW()""",
            (str(user_id), new_balance, new_balance),
        )
        conn.commit()
    finally:
        conn.close()

    return {"statusCode": 200, "headers": CORS, "body": json.dumps({"ok": True, "balance": new_balance})}
