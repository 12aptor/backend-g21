import os
import werkzeug

from flask_restful import Resource,Api,reqparse
from flask import request

from .. import api
from ..models import Plato
from ..schemas import PlatoSchema


api_platos = Api(api)

class UploadImage(Resource):
    
    def post(self):
        try:
            parse = reqparse.RequestParser()
            parse.add_argument('file',type=werkzeug.datastructures.FileStorage,location='files')
            args = parse.parse_args()
            
            image_file = args['file']
            image_file.save(os.path.join(os.getcwd(),'app','static','uploads',image_file.filename))
            
            url_path = request.host_url + 'static/uploads/' + str(image_file.filename)
            
            context = {
                'status':True,
                'content':url_path
            }
            
            return context,201
        
        except Exception as e:
            return {
                'status':False,
                'content':str(e)
            },500

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
        data = request.get_json()
        obj_plato = Plato(data['nombre'])
        if 'precio' in data:
            obj_plato.precio = data['precio']
        if 'imagen' in data:
            obj_plato.imagen = data['imagen']
        obj_plato.save()
        if 'categoria_id' in data:
            obj_plato.categoria_id = data['categoria_id']
        
        data_schema = PlatoSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(obj_plato)
        }
        
        return context
    
class PlatoDetailResource(Resource):
    
    def get(self,id):
        data = Plato.get_by_id(id)
        if not data:
            return{
                'status':False,
                'content':'plato no encontrado'
            },404
            
        data_schema = PlatoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        return context
    
    def put(self,id):
        obj_plato = Plato.get_by_id(id)
        if not obj_plato:
            return{
                'status':False,
                'content':'plato no encontrado'
            },404
        
        data = request.get_json()    
        if 'nombre' in data:
            obj_plato.nombre = data['nombre']
        if 'precio' in data:
            obj_plato.precio = data['precio']
        if 'imagen' in data:
            obj_plato.imagen = data['imagen']
        if 'categoria_id' in data:
            obj_plato.categoria_id = data['categoria_id']
        
        obj_plato.save()
        
        data_schema = PlatoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(obj_plato)
        }
        return context
    
    def delete(self,id):
        try:
            obj_plato = Plato.get_by_id(id)
            obj_plato.delete()
            
            data_schema = PlatoSchema()
            
            context = {
                'status':True,
                'content':data_schema.dump(obj_plato)
            }
            
            return context
            
        except Exception as e:
            return {
                'status':False,
                'content': str(e)
            },500
    
api_platos.add_resource(PlatoResource,'/plato')
api_platos.add_resource(PlatoDetailResource,'/plato/<id>',endpoint='plato')
api_platos.add_resource(UploadImage,'/plato/upload')