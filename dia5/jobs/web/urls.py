from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('categoria/<int:categoria_id>',views.ofertas_por_categoria,name='categoria')
]