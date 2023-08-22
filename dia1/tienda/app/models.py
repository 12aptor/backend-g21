from django.db import models


class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    imagen = models.CharField(max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_categoria'
        
    def __str__(self):
        return self.nombre


class Plato(models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.FloatField(blank=True, null=True)
    imagen = models.CharField(max_length=254, blank=True, null=True)
    categoria = models.ForeignKey(Categoria, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_plato'
        
    def __str__(self):
        return self.nombre