from flask import Flask,render_template,request,redirect

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
    cursor.close()
    print(data)
    context = {
        'productos':data
    }
                    
    return render_template('catalogo/index.html',**context)

from .forms import CatalogoForm

@catalogo.route('/nuevo',methods=['GET','POST'])
def nuevo():
    catalogo_form = CatalogoForm()
    titulo = "NUEVO PRODUCTO"
    
    if catalogo_form.validate_on_submit():
        descripcion = catalogo_form.descripcion.data
        precio = catalogo_form.precio.data
        
        cursor = db.cursor()
        sql_insert_producto = """
                              insert into tbl_producto(producto_descripcion,producto_precio)
                              values('"""+ descripcion +"""',"""+ str(precio) +""")
                              """
        cursor.execute(sql_insert_producto)
        db.commit()
        cursor.close()
        titulo = "PRODUCTO INSERTADO"
        return redirect('/catalogo')
    
    context = {
        'titulo':titulo,
        'form':catalogo_form
    }
    
    return render_template('catalogo/nuevo.html',**context)

@catalogo.route('/editar/<id>',methods=['GET','POST'])
def editar(id):
    titulo = "EDITAR PRODUCTO"
    
    cursor_editar = db.cursor(dictionary=True)
    sql_editar = """
                 select producto_descripcion as descripcion,
                 producto_precio as precio
                 from tbl_producto where producto_id = """+ id +"""
                 """
    cursor_editar.execute(sql_editar)
    data = cursor_editar.fetchall()
    cursor_editar.close()
    
    catalogo_form = CatalogoForm(data=data[0])
    
    if catalogo_form.validate_on_submit():
        descripcion = catalogo_form.descripcion.data
        precio = catalogo_form.precio.data
        
        cursor = db.cursor()
        sql_update_producto = """
                              update tbl_producto
                              set producto_descripcion = '"""+ descripcion +"""',
                              producto_precio = """+ str(precio) +"""
                              where producto_id = """ + id + """
                              """
        cursor.execute(sql_update_producto)
        db.commit()
        cursor.close()
        return redirect('/catalogo')
    
    context = {
        'titulo':titulo,
        'form':catalogo_form
    }
    
    return render_template('catalogo/editar.html',**context)

@catalogo.route('/eliminar/<id>',methods=['GET'])
def eliminar(id):
    cursor = db.cursor()
    sql_eliminar = """
                 delete from tbl_producto 
                 where producto_id = """+ id +"""
                 """
    cursor.execute(sql_eliminar)
    db.commit()
    cursor.close()
    return redirect('/catalogo')
    