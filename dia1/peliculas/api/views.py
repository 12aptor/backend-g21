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
from .serializers import PeliculaSerializer

@api_view(['GET','POST'])
def peliculas(request):
    
    if request.method == 'POST':
        serializer = PeliculaSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
    elif request.method == 'GET':
        lista_peliculas = Pelicula.objects.all()
        serializer = PeliculaSerializer(lista_peliculas,many=True)
    
    context = {
        'status':True,
        'content':serializer.data
    }
    
    return Response(context)