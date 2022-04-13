# Application like pastebin
## Table of Contents
* [Technologies](#technologies)
* [Authors](#authors)
* [Commands](#commands)
* [Ports](#[ports])
* [RUN_TEST](#[RUN_TEST])
## Technologies
* Django
* PostgreSQL
* React
* GraphQL
## Authors: 
* Damian Murawski
* Sebastian Murawski
* Paweł Zaręba
* Daniel Nieznański
* Bartosz Niewiadomski
## Ports:
* Frontend - `localhost:3000`
* Backend -  `localhost:8000`
* Backend-admin `localhost:8000/admin`
* Backend-graphQL `localhost:8000/graphql`
* Pgadmin - `localhost:5050`
## Commands: 
1. Install precommit `pre-commit install`
2. Build whole projects `docker-compose build` or `docker-compose up`
3. Build only frontend `docker-compose build --no-cache frontend`
4. Create superuser. Go to backend container `python manage.py createsuperuser`
5. Migration. Go to backend container `python manage.py makemigrations <APP_NAME>` next `python manage.py migrate`
6. Load Fixtures: `python manage.py loaddata <Name>.json`
## Pgadmin:
1. DEFAULT LOGIN: `admin@admin.com`
2. DEFAULT PASSWORD: `admin`
<img src="https://user-images.githubusercontent.com/52125396/159588369-222c39bb-a65c-4903-9d83-d2937c8293b8.png" width="45%"></img> 
## RUN_TEST:
!!!!  IMPORTANT Tests must begin with the word `test`  !!!!
1. Go to cointainer with BACKEND
2. Write `python manage.py test ` nazwa aplikacji (np: users)
