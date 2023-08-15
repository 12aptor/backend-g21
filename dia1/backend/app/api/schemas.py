from utils.db import ma

from marshamllow_sqlalchemy import SQLAlchemyAutoSchema 

from .models import Plato

class PlatoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Plato