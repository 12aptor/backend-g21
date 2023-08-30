from django.urls import path

from . import views

urlpatterns = [
    path('categoria', views.CategoriaView.as_view()),
    path('categoria/<int:categoria_id>',views.CategoriaDetailView.as_view()),
    path('empresa',views.EmpresaView.as_view()),
    path('empresa/<int:empresa_id>',views.EmpresaDetailView.as_view())
]