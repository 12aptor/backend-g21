from flask import Flask
from .catalogo import catalogo
from .cliente import cliente
from .factura import factura

from app.mysql_lib import MysqlDb
mysql_db = MysqlDb('localhost','root','','db_factura_g21')
db = mysql_db.get_conn()

def create_app():
    app = Flask(__name__)
    app.register_blueprint(catalogo)
    app.register_blueprint(cliente)
    app.register_blueprint(factura)
    return app