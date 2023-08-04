from flask import Flask,render_template,request

from . import catalogo

@catalogo.route('/')
def index():
    return render_template('catalogo/index.html')