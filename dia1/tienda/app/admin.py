from django.contrib import admin

# Register your models here.
from .models import Categoria,Plato

admin.site.register(Categoria)
admin.site.register(Plato)