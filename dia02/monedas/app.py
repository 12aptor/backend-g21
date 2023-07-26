from flask import Flask,render_template,request
from tipo_cambio_sbs import TipoCambioSbs

app = Flask(__name__)
TITULO_PAGINA = "TIPO DE CAMBIO DE LA SBS"


@app.route('/')
def index():
    sbs = TipoCambioSbs()
    lista_monedas = sbs.obtener()
    return render_template('index.html',titulo=TITULO_PAGINA,monedas=lista_monedas)

@app.route('/convertir',methods=['POST'])
def convertir():
    if request.method == "POST":
        monto_soles = request.form['soles']
        resultado =  round(float(monto_soles) / 3.588,2)
        
    return render_template('index.html',titulo=TITULO_PAGINA,monto=resultado)


app.run(debug=True)


