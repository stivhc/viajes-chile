# Viajes Chile — Django

## Requisitos

- Python 3.10+
- PostgreSQL 14+

## Instalación

```bash
cd viajes_chile
pip install -r requirements.txt
```

## Base de datos PostgreSQL

```sql
CREATE DATABASE viajes_chile;
CREATE USER postgres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE viajes_chile TO postgres;
```

O con variables de entorno:

```bash
export DB_NAME=viajes_chile
export DB_USER=tu_usuario
export DB_PASSWORD=tu_password
export DB_HOST=localhost
export DB_PORT=5432
```

## Migraciones

```bash
python manage.py makemigrations
python manage.py migrate
```

## Superusuario (panel admin)

```bash
python manage.py createsuperuser
```

## Archivos estáticos

```bash
python manage.py collectstatic
```

## Ejecutar servidor

```bash
python manage.py runserver
```

Abrir: http://127.0.0.1:8000

## Estructura del proyecto

```
viajes_chile/
├── manage.py
├── requirements.txt
├── viajes_chile/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── travel/
│   ├── models.py       # Destination, ContactMessage
│   ├── views.py        # home, register
│   ├── forms.py        # RegistrationForm, ContactForm
│   ├── urls.py
│   └── admin.py
├── templates/
│   ├── base.html
│   ├── travel/
│   │   └── home.html
│   └── registration/
│       ├── login.html
│       └── register.html
└── static/
    ├── css/style.css
    ├── js/main.js
    └── img/
```

## Funcionalidades

- Página principal con carrusel animado, sección "Quiénes Somos", destinos destacados y formulario de contacto
- Registro de usuarios con PostgreSQL
- Login / Logout
- Panel de administración Django en /admin/
- Gestión de destinos y mensajes de contacto desde el admin
- Diseño minimalista responsive
