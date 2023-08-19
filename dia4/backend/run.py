from app import create_app
from utils.db import db,migrate
from utils.jwt import jwt 

app = create_app()

with app.app_context():
    db.init_app(app)
    migrate.init_app(app,db)
    jwt.init_app(app)