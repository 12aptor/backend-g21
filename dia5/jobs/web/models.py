from django.db import models

# Create your models here.
class Ubicacion(models.Model):
    nombre = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.nombre
    
class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.nombre
    
class Oferta(models.Model):
    
    MODALIDAD_CHOICES = (
        ('remoto','REMOTO'),
        ('presencial','PRESENCIAL'),
        ('hibrido','HIBRIDO')
    )
    
    ubicacion = models.ForeignKey(Ubicacion,on_delete=models.RESTRICT)
    categoria = models.ForeignKey(Categoria,on_delete=models.RESTRICT)
    modalidad = models.CharField(max_length=50,choices=MODALIDAD_CHOICES)
    experiencia_cantidad = models.IntegerField(default=0)
    experiencia_detalle = models.TextField(null=True)
    salario = models.DecimalField(max_digits=10,decimal_places=2,default=0)
    puesto = models.CharField(max_length=200,null=True)
    descripcion = models.TextField(null=True)
    responsabilidades = models.TextField(null=True)
    fecha_registro = models.DateField(auto_now=True)
    fecha_cierre = models.DateField(null=True)
    empresa = models.CharField(null=True,max_length=200)
    imagen = models.ImageField(upload_to='ofertas',blank=True)
    
    def __str__(self):
        return self.puesto
    