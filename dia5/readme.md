1 - python -m venv venv
2 - source venv/Scripts/activate
3 - pip install -r requirements.txt
4 - cd jobs
5 - python manage.py migrate
6 - python manage.py createsuperuser
7 - python manage.py runserver