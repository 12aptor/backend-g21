from django.shortcuts import render

# Create your views here.
def index(request):
    titulo = 'PORTAL DE OFERTAS LABORALES'
    context = {
        'titulo':titulo
    }
    return render(request,'index.html',context)