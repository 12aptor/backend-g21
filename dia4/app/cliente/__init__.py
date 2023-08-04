from flask import Blueprint

cliente = Blueprint('cliente',__name__,url_prefix='/cliente')

from . import views