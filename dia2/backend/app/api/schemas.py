from utils.db import ma

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema 

from .models import Plato,Categoria

class CategoriaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Categoria

class PlatoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Plato