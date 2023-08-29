from django.urls import path

from . import views

urlpatterns = [
    path('',views.index),
    path('peliculas',views.peliculas),
    path('peliculas/<int:pelicula_id>',views.pelicula_detail)
]
