from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/portafolio')
def portafolio():
    return render_template('portafolio.html')


app.run(debug=True)