from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
    titulo = "TIPO DE CAMBIO DE LA SBS"
    return render_template('index.html',titulo=titulo)

app.run(debug=True)


