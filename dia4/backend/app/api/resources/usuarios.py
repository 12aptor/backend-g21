from flask_restful import Resource ,Api
from flask import request
from utils.db import db

from .. import api
from ..models import Usuario
from ..schemas import UsuarioSchema

from werkzeug.security import (
    generate_password_hash,
    check_password_hash)

from flask_jwt_extended import (
    create_access_token,
    jwt_required
)

api_usuarios = Api(api)

class UsuarioResource(Resource):
    
    @jwt_required()
    def get(self):
        try:
            data = Usuario.get_all()
            data_schema = UsuarioSchema(many=True)
            
            context = {
                'status':True,
                'content':data_schema.dump(data)
            },200
            return context
        except Exception as e:
            return {
                'status':False,
                'content':str(e)
            },500
    
    def post(self):
        try:
            data = request.get_json()
            password_hash = generate_password_hash(data['password'])
            usuario_existente = Usuario.query.filter_by(email=data['email']).first()
            if not usuario_existente:
                obj_usuario = Usuario()
                obj_usuario.nombre = data['nombre']
                obj_usuario.email = data['email']
                obj_usuario.password = password_hash
                obj_usuario.save()
                
                data_schema = UsuarioSchema()
                content_usuario = data_schema.dump(obj_usuario)
                token = create_access_token(identity=content_usuario)
                return {
                    'status':True,
                    'token':token,
                    'Content':content_usuario
                }
            
            return {
                'status':False,
                'content':'El email ya esta registrado'
            },400
            
        except Exception as e:
            db.session.rollback()
            return {
                'status':False,
                'content':str(e)
            },500
            
class AuthResource(Resource):
    
    def post(self):
        try:
            data = request.get_json()
            obj_usuario = Usuario.query.filter_by(email=data['email']).first()
            if not obj_usuario:
                return {
                    'status':False,
                    'content':'No existe usuario con el email proporcionado'
                },400
            is_valid_password = check_password_hash(obj_usuario.password,data['password'])
            if is_valid_password:
                data_schema = UsuarioSchema()
                usuario_content = data_schema.dump(obj_usuario)
                token = create_access_token(identity=usuario_content)
                return {
                    'status':True,
                    'token':token
                },200
            else:
                return {
                    'status':False,
                    'content':'contraseña invalida'
                },400
        except Exception as e:
            return {
                'status':False,
                'content':str(e)
            },500
    
api_usuarios.add_resource(UsuarioResource,'/usuario')
api_usuarios.add_resource(AuthResource,'/login')