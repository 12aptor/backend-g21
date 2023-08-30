from django.urls import path

from . import views

urlpatterns = [
    path('movimiento',views.MovimientoView.as_view()),
    path('movimiento/<int:pk>',views.MovimientoDetailView.as_view())
]