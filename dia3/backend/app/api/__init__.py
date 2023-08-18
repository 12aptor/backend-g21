from flask import Blueprint

api = Blueprint('api',__name__,url_prefix='/api')

from .models import Plato

from .resources import platos
from .resources import categorias