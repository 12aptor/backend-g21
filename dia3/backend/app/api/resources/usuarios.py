from flask_restful import Resource ,Api
from flask import request

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
    
    def get(self):
        pass
    
    def post(self):
        pass
    
api_usuarios.add_resource(UsuarioResource,'/usuario')