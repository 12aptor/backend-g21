from flask import Flask,render_template,request
from tipo_cambio_sbs import TipoCambioSbs

app = Flask(__name__)
TITULO_PAGINA = "TIPO DE CAMBIO DE LA SBS"

sbs = TipoCambioSbs()
lista_monedas = sbs.obtener()

@app.route('/')
def index():
    return render_template('index.html',titulo=TITULO_PAGINA,monedas=lista_monedas)

@app.route('/convertir',methods=['POST'])
def convertir():
    if request.method == "POST":
        monto_soles = request.form['soles']
        tipo_moneda = request.form['tipomoneda']
        for contador in range(len(lista_monedas)):
            dic_moneda = lista_monedas[contador]
            for key,value in dic_moneda.items():
                if key=='moneda' and value== tipo_moneda:
                    index_moneda = contador
                    break
                
        dic_monto_cambio = lista_monedas[index_moneda]
        resultado =  round(float(monto_soles) / float(dic_monto_cambio['venta']),2)
        
    context = {
        'titulo':TITULO_PAGINA,
        'monto':resultado,
        'moneda_destino':tipo_moneda,
        'monedas':lista_monedas
    }
        
    return render_template('index.html',**context)

"""
implementar el convertidor de monedas de soles seleccionando
de un combo select el tipo de moneda para que al dar clic en el boton convertir
aparezca el monto en la moneda seleccionada
"""

app.run(debug=True)


