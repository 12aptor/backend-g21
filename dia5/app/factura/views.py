from flask import Flask,render_template,request

from . import factura

@factura.route('/')
def index():
    return render_template('factura/index.html')