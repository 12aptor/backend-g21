from flask import Flask
from flask_cors import CORS
from .config import Config

from .api import api

from flask_jwt_extended import create_access_token

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.config.from_object(Config)
    app.register_blueprint(api)
    
    @app.route('/')
    def index():
        token = create_access_token(identity='1')
        return """<center><h1>API REST TAIPAPP 1.0</h1>
                </hr>
                TOKEN : """+ token +"""
                </center>"""
    
    return app