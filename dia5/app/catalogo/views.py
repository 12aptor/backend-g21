from flask import Flask,render_template,request

from . import catalogo
from app import db

@catalogo.route('/')
def index():
    cursor = db.cursor(dictionary=True)
    sql_productos = """select producto_id as id,
                       producto_descripcion as descripcion,
                       producto_precio as precio
                       from tbl_producto
                    """
                    
    
    cursor.execute(sql_productos)
    data = cursor.fetchall()
    print(data)
    context = {
        'productos':data
    }
                    
    return render_template('catalogo/index.html',**context)