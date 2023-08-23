from django.shortcuts import render

# Create your views here.
from .models import Pelicula

def index(request):
    lista_peliculas = Pelicula.objects.all()
    print(lista_peliculas)
    
    context = {
        'peliculas':lista_peliculas
    }
    
    return render(request,'index.html',context)