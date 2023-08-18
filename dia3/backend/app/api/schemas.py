from utils.db import ma
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema,fields
from .models import Plato,Categoria

class CategoriaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Categoria

class PlatoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Plato
        include_relationships = True
    
    categoria = fields.Nested(CategoriaSchema)
    
class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre','email','isAdmin')