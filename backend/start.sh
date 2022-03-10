#!/bin/bash

python manage.py makemigrations
python manage.py migrate
gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 backend.wsgi