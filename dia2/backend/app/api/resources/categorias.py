from flask_restful import Resource,Api
from flask import request

from .. import api
from ..models import Categoria
from ..schemas import CategoriaSchema

api_categorias = Api(api)

class CategoriaResource(Resource):
    
    def get(self):
        data = Categoria.get_all()
        data_schema = CategoriaSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
    def post(self):
        data = request.get_json()
        
        obj_categoria = Categoria(data['nombre'])
        obj_categoria.save()
        
        data_schema = CategoriaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(obj_categoria)
        }
        
        return context
    
class CategoriaDetailResource(Resource):
    
    def get(self,id):
        data = Categoria.get_by_id(id)
        data_schema = CategoriaSchema()
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context
    
    def put(self,id):
        pass
    
    def delete(self,id):
        pass
    
api_categorias.add_resource(CategoriaResource,'/categoria')
api_categorias.add_resource(CategoriaDetailResource,'/categoria/<id>',endpoint='categoria')