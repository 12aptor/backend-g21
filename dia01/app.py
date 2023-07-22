"""Flask es un microframework para Python que nos permite crear aplicaciones
web de una manera rápida y sencilla. En nuestro caso lo usaremos para crear
REST APIs."""

from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "Hola mundo"

if __name__ == "__main__":
    app.run(debug=True)