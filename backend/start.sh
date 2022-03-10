#!/bin/bash

apt-get update
apt-get install libpq-dev --assume-yes

# # Collect static files
# echo "Collect static files"
# python manage.py collectstatic --noinput

# Apply database migrations
echo "Apply database migrations"
python manage.py makemigrations --noinput
python manage.py migrate

echo Starting Gunicorn.
gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 backend.wsgi