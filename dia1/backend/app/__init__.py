from flask import Flask
from flask_cors import CORS
from .config import Config

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.config.from_object(Config)
    
    @app.route('/')
    def index():
        return '<center><h1>API REST TAIPAPP 1.0</h1></center>'
    
    return app