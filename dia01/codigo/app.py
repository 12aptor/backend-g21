from flask import Flask,request

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Bienvenido a mi pagina web con flask</h1>'

@app.route('/saludo')
def saludo():
    nombre = request.args.get('nombre','no hay nombre')
    return '<center>Hola {}</center>'.format(nombre)

@app.route('/suma')
def suma():
    n1 = request.args.get('n1','0')
    n2 = request.args.get('n2','0')
    resultado = int(n1) + int(n2)
    return '<h1> la suma es {}</h1>'.format(resultado)
"""
 crear una ruta llamada calculadora que reciba 3 parametros
 n1 , n2 y ope donde ope es la operacion a calcular
 si ope es igual a suma debe sumar si es igual a restar y si es igual
 a multiplicación debe multiplicar, si escribes otra operación distinta
 debe salir un mensaje que diga OPERACION INVALIDA
"""
@app.route('/calculadora')
def calculadora():
    n1 = int(request.args.get('n1','0'))
    n2 = int(request.args.get('n2','0'))
    ope = request.args.get('ope','ninguno')
    
    if(ope == 'suma'):
        resultado = n1 + n2
    elif(ope == 'resta'):
        resultado = n1 - n2
    elif(ope == 'multiplicacion'):
        resultado = n1 * n2
    else:
        resultado = None
        
    if resultado is not None:
        return '<h1>resultado es {}</h1>'.format(resultado)
    else:
        return '<h1>OPERACIÓN INVALIDA</h1>'


app.run(debug=True)

