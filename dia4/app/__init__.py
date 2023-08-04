from flask import Flask
from .catalogo import catalogo
from .cliente import cliente
from .factura import factura

def create_app():
    app = Flask(__name__)
    app.register_blueprint(catalogo)
    app.register_blueprint(cliente)
    app.register_blueprint(factura)
    return app