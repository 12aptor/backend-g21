from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Bienvenido a mi pagina web con flask</h1>'

@app.route('/saludo')
def saludo():
    nombre = request.args.get('nombre','no hay nombre')
    return '<center>Hola {}</center>'.format(nombre)

app.run(debug=True)

