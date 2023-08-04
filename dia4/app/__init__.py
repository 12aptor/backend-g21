from flask import Flask
from .catalogo import catalogo

def create_app():
    app = Flask(__name__)
    app.register_blueprint(catalogo)
    return app