from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def index(request):
    context = {
        'status':True,
        'content':'mi primer api rest con django'
    }
    
    return Response(context)

from .models import Pelicula

def peliculas(request):
    lista_peliculas = Pelicula.objects.all()
    
    context = {
        'status':True,
        'content':list(lista_peliculas.values())
    }
    
    return JsonResponse(context)