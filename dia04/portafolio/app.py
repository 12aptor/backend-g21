from flask import Flask,request,render_template
from profile import Profile

app = Flask(__name__)

lista_proyectos = [
    {
        'codigo':'1',
        'titulo':'Ecommerce',
        'imagen':'https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/comparativa-de-las-plataformas-de-ecommerce-mas-populares-1.png',
        'descripcion':'ecommerce creado con react.js',
        'url':'https://www.linio.com.pe'
    },
    {
        'codigo':'2',
        'titulo':'Clon de Udemy',
        'imagen':'https://i.ytimg.com/vi/YupUQMakNZ4/maxresdefault.jpg',
        'descripcion':'clon de udemy creado con stack MERN',
        'url':'https://www.udemy.com'
    },
    {
        'codigo':'3',
        'titulo':'Clon de Netflix',
        'imagen':'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf9hg224wv9ke1mz140r.png',
        'descripcion':'clon de netflix creado con django',
        'url':'https://www.netflix.com'
    }  
]

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