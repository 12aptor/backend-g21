from flask import Flask
from flask_cors import CORS



def create_app():
    
    app = Flask(__name__)
    CORS(app)
    
    @app.route('/')
    def index():
        return '<center><h1>API REST TAIPAPP 1.0</h1></center>'
    
    return app