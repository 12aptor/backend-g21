from flask import Flask
from .catalogo import catalogo
from .cliente import cliente

def create_app():
    app = Flask(__name__)
    app.register_blueprint(catalogo)
    app.register_blueprint(cliente)
    return app