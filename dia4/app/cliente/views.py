from flask import Flask,render_template,request

from . import cliente

@cliente.route('/')
def index():
    return render_template('cliente/index.html')