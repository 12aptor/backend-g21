from flask import Blueprint

catalogo = Blueprint('catalogo',__name__,url_prefix='/catalogo')

from . import views