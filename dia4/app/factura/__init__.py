from flask import Blueprint

factura = Blueprint('factura',__name__,url_prefix='/')

from . import views