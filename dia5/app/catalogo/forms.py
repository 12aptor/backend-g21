from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,DecimalField,SubmitField

class CatalogoForm(FlaskForm):
    descripcion = StringField('Descripcion',validators=[DataRequired()])
    precio = DecimalField('Precio',places=2,validators=[DataRequired()])
    submit = SubmitField('Registrar Nuevo Producto')