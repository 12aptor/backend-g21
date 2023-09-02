from django.contrib import admin

# Register your models here.
from .models import Mesa,Categoria

admin.site.register(Mesa)
admin.site.register(Categoria)
