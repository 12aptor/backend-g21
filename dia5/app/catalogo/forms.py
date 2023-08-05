from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,DecimalField,SubmitField

class CatalogoForm(FlaskForm):
    descripcion = StringField('Descripción de Producto',validators=[DataRequired()])
    precio = DecimalField('Precio',places=2,validators=[DataRequired()])
    submit = SubmitField('Guardar')