from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('filtros',views.filtros,name='filtros'),
    path('oferta',views.oferta_detalle,name='oferta')
]