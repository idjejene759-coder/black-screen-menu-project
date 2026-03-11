import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        category = body_data.get('category', 'Не указана')
        name = body_data.get('name', '')
        phone = body_data.get('phone', '')
        email = body_data.get('email', '')
        answers = body_data.get('answers', {})
        message = body_data.get('message', '')
        
        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'error': 'Имя и телефон обязательны'}),
                'isBase64Encoded': False
            }
        
        smtp_host = os.environ.get('SMTP_HOST')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        
        if not all([smtp_host, smtp_user, smtp_password]):
            return {
                'statusCode': 500,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({'error': 'SMTP не настроен'}),
                'isBase64Encoded': False
            }
        
        email_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #122971;">Новая заявка с сайта КГС</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #122971; margin-top: 0;">Категория: {category}</h3>
                
                <p><strong>Имя:</strong> {name}</p>
                <p><strong>Телефон:</strong> {phone}</p>
                {f'<p><strong>Email:</strong> {email}</p>' if email else ''}
            </div>
        """
        
        if answers:
            email_body += """
            <div style="margin: 20px 0;">
                <h3 style="color: #122971;">Ответы на вопросы:</h3>
                <ul style="list-style: none; padding: 0;">
            """
            for question, answer in answers.items():
                email_body += f'<li style="margin: 10px 0; padding: 10px; background: #f9f9f9; border-left: 3px solid #FFA500;"><strong>{question}:</strong> {answer}</li>'
            email_body += "</ul></div>"
        
        if message:
            email_body += f"""
            <div style="margin: 20px 0;">
                <h3 style="color: #122971;">Дополнительный комментарий:</h3>
                <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">{message}</p>
            </div>
            """
        
        email_body += """
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            <p style="color: #999; font-size: 12px;">Это письмо отправлено автоматически с сайта kgs-ural.ru</p>
        </body>
        </html>
        """
        
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Заявка: {category} - {name}'
        msg['From'] = smtp_user
        msg['To'] = 'info@kgs-ural.ru'
        msg['Reply-To'] = email if email else phone
        
        html_part = MIMEText(email_body, 'html', 'utf-8')
        msg.attach(html_part)
        
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'}),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'}),
            'isBase64Encoded': False
        }
