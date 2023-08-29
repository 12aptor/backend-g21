from django.http import JsonResponse

def index(request):
    context = {
        'status':True,
        'content':'mi primer api rest con django'
    }
    
    return JsonResponse(context)

from .models import Pelicula

def peliculas(request):
    lista_peliculas = Pelicula.objects.all()
    
    context = {
        'status':True,
        'content':list(lista_peliculas.values())
    }
    
    return JsonResponse(context)