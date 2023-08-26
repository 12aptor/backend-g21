from django.shortcuts import render

from .models import (
    Categoria,Ubicacion,
    Oferta
)

# Create your views here.
def index(request):
    titulo = 'PORTAL DE OFERTAS LABORALES'
    lista_categorias = Categoria.objects.all()
    lista_ubicaciones = Ubicacion.objects.all()
    lista_ofertas = Oferta.objects.all()
    
    context = {
        'titulo':titulo,
        'categorias':lista_categorias,
        'ubicaciones':lista_ubicaciones,
        'ofertas':lista_ofertas
    }
    return render(request,'index.html',context)


def filtros(request):
    titulo = 'PORTAL DE OFERTAS LABORALES'
    
    lista_ofertas = Oferta.objects.all()
    if request.method == "POST":
        categoria_id = int(request.POST['categoria_id'])
        ubicacion_id = int(request.POST['ubicacion_id'])
        if categoria_id > 0 :
            objCategoria = Categoria.objects.get(pk=categoria_id)
            lista_ofertas = Oferta.objects.filter(categoria=objCategoria)
        elif ubicacion_id > 0:
            objUbicacion = Ubicacion.objects.get(pk=ubicacion_id)
            lista_ofertas = objUbicacion.oferta_set.all()
        
    
    lista_categorias = Categoria.objects.all()
    lista_ubicaciones = Ubicacion.objects.all()
    
    context = {
        'titulo':titulo,
        'categorias':lista_categorias,
        'ubicaciones':lista_ubicaciones,
        'ofertas':lista_ofertas
    }
    return render(request,'index.html',context)
