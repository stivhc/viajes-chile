import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'viajes_chile.settings')
application = get_wsgi_application()
