from django.urls import path

from . import views

urlpatterns = [
    path('movimiento',views.MovimientoView.as_view())
]