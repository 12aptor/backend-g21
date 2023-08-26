from django.contrib import admin

# Register your models here.
from .models import (
    Categoria,Ubicacion,
    Oferta
)

admin.site.register(Categoria)
admin.site.register(Ubicacion)
admin.site.register(Oferta)