"""Отдаёт .vcf файл контакта сотрудника с правильным Content-Type для автоматического открытия в iOS/Android"""

EMPLOYEES = {
    "seleznev": {
        "name": "Селезнев Евгений Анатольевич",
        "position": "Генеральный директор",
        "company": "ООО «КГС»",
        "phones": ["+78006007465", "+73433467475"],
        "emails": ["info@kgs-ural.ru"],
    },
    "tapinyuk": {
        "name": "Тапинюк Ольга Александровна",
        "position": "Исполнительный директор",
        "company": "ООО «КГС»",
        "phones": ["+79655270238"],
        "emails": ["zhirova@kgs-ural.ru"],
    },
    "plyukhina": {
        "name": "Плюхина Юлия Александровна",
        "position": "Менеджер по продажам",
        "company": "ООО «КГС»",
        "phones": ["+79630371728"],
        "emails": ["sales2@kgs-ural.ru"],
    },
    "semenova": {
        "name": "Семенова Анна Викторовна",
        "position": "Менеджер по продажам",
        "company": "ООО «КГС»",
        "phones": ["+79097033066"],
        "emails": ["sales4@kgs-ural.ru"],
    },
    "mutallapov": {
        "name": "Муталлапов Артур Фирдависович",
        "position": "Сервисный инженер",
        "company": "ООО «КГС»",
        "phones": ["+79630378244"],
        "emails": ["service@kgs-ural.ru"],
    },
}


def build_vcard(emp: dict) -> str:
    name = emp["name"]
    position = emp["position"]
    company = emp["company"]

    parts = name.strip().split(" ")
    last_name = parts[0] if parts else ""
    first_name = " ".join(parts[1:]) if len(parts) > 1 else ""

    title_line = f"{position} {company}"

    lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        f"FN:{title_line}",
        f"N:{last_name};{first_name};;;",
        f"ORG:{company}",
        f"TITLE:{position}",
    ]
    for phone in emp.get("phones", []):
        lines.append(f"TEL;TYPE=CELL:{phone}")
    for email in emp.get("emails", []):
        lines.append(f"EMAIL:{email}")
    lines.append("END:VCARD")

    return "\r\n".join(lines)


def handler(event: dict, context) -> dict:
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            "body": "",
        }

    slug = (event.get("queryStringParameters") or {}).get("slug", "")
    emp = EMPLOYEES.get(slug)

    if not emp:
        return {
            "statusCode": 404,
            "headers": {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"},
            "body": '{"error": "not found"}',
        }

    vcard = build_vcard(emp)
    filename = emp["name"].replace(" ", "_") + ".vcf"

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": f"inline; filename=\"{filename}\"",
        },
        "body": vcard,
    }