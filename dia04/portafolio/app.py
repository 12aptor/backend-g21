from flask import Flask,request,render_template
from profile import Profile
from firebase import FirebaseAdmin

app = Flask(__name__)

fb = FirebaseAdmin()


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
    lista_proyectos = fb.get_collection('proyectos')
    context = {
        'proyectos':lista_proyectos
    }
    return render_template('portafolio.html',**context)

@app.route('/acercade')
def acercade():
    return render_template('acercade.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')


app.run(debug=True)