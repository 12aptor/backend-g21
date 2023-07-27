from flask import Flask,request,render_template
from profile import Profile

app = Flask(__name__)

@app.route('/')
def index():
    perfil = Profile()
    context = {
        'nombre':perfil.name,
        'imagen':perfil.image,
        'rol':perfil.role,
        'ubicacion':perfil.location,
        'url_github':perfil.url_github
    }
    return render_template('index.html',**context)

@app.route('/portafolio')
def portafolio():
    return render_template('portafolio.html')

@app.route('/acercade')
def acercade():
    return render_template('acercade.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')


app.run(debug=True)