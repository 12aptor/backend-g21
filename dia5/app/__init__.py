from flask import Flask
from app.mysql_lib import MysqlDb
mysql_db = MysqlDb('localhost','root','','db_factura_g21')
db = mysql_db.get_conn()

from .catalogo import catalogo
from .cliente import cliente
from .factura import factura

def create_app():
    app = Flask(__name__)
    app.register_blueprint(catalogo)
    app.register_blueprint(cliente)
    app.register_blueprint(factura)
    return app