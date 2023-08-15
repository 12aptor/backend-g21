from flask_restful import Resource,Api
from flask import request

from .. import api
from ..models import Plato
from ..schemas import PlatoSchema

api_platos = Api(api)

class PlatoResource(Resource):
    
    def get(self):
        data = Plato.query.all()
        data_schema = PlatoSchema(many=True)
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
    def post(self):
        pass
    
api_platos.add_resource(PlatoResource,'/plato')