from utils.db import db

class Categoria(db.Model):
    __tablename__ = "tbl_categoria"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    imagen = db.Column(db.String(254),nullable=True)
    
    def __init__(self,nombre):
        self.nombre = nombre
        
    @staticmethod
    def get_all():
        return Categoria.query.all()
    
    def save(self):
        db.session.add(self)
        db.session.commit()
        
class Plato(db.Model):
    __tablename__ = "tbl_plato"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    precio = db.Column(db.Double,default=0)
    imagen = db.Column(db.String(254),
                       default='https://img.freepik.com/vector-premium/icono-parrilla-pollo-negro-simbolo-ilustracion-pollo-caliente-signo-vector-alimentos_744955-457.jpg')
    
    def __init__(self,nombre):
        self.nombre = nombre
        
    