from django.db import models

# Create your models here.
class Movimiento(models.Model):
    
    TIPOS_CHOICES = (
        ('1','INGRESO'),
        ('2','EGRESO')
    )
    
    tipo = models.CharField(max_length=1,choices=TIPOS_CHOICES)
    fecha = models.DateField(auto_now_add=True)
    concepto = models.CharField(max_length=200)
    monto = models.DecimalField(max_digits=10,decimal_places=2)
    saldo = models.DecimalField(max_digits=10,decimal_places=2)
    
    def __str__(self):
        return self.concepto
    