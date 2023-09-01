from django.urls import path,include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'experiencia',views.ExperienciaViewSet,basename='experiencia')

urlpatterns = [
    path('',include(router.urls)),
    path('categoria', views.CategoriaView.as_view()),
    path('categoria/<int:categoria_id>',views.CategoriaDetailView.as_view()),
    path('empresa',views.EmpresaView.as_view()),
    path('empresa/<int:empresa_id>',views.EmpresaDetailView.as_view()),
]