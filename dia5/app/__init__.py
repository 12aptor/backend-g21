from flask import Flask
from flask_bootstrap import Bootstrap5
from .config import Config

from app.mysql_lib import MysqlDb
mysql_db = MysqlDb('localhost','root','','db_factura_g21')
db = mysql_db.get_conn()

from .catalogo import catalogo
from .cliente import cliente
from .factura import factura

def create_app():
    app = Flask(__name__)
    
    bootstrap = Bootstrap5(app)
    app.config.from_object(Config)
    
    app.register_blueprint(catalogo)
    app.register_blueprint(cliente)
    app.register_blueprint(factura)
    return app