from django.contrib import admin
from django.utils.html import format_html

# Register your models here.
from .models import Mesa,Categoria,Plato,Pedido,PedidoPlato

admin.site.register(Mesa)
admin.site.register(Categoria)

@admin.register(Plato)
class PlatoAdmin(admin.ModelAdmin):
    
    def imagen_html(self,obj):
        return format_html('<img src="{}" width=150px/>'.format(obj.plato_img.url))
    
    imagen_html.short_description = 'Image'
    
    list_display = ('plato_nom','plato_pre','imagen_html')
    list_filter = ('categoria_id',)
    
@admin.register(PedidoPlato)
class PedidoPlatosAdmin(admin.ModelAdmin):
    
    list_display = ('pedidoplato_id','pedido_id','plato_id','pedidoplato_cant')
    list_filter = ('pedido_id',)

