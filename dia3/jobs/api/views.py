from rest_framework import generics
from rest_framework import viewsets

from .models import (
    TblCategoria,
    TblEmpresa,
    TblExperiencia,
    TblJornada,
    TblModalidad
)

from .serializers import (
    CategoriaSerializer,
    EmpresaSerializer,
    ExperienciaSerializer,
    JornadaSerializer,
    ModalidadSerializer
)

class CategoriaView(generics.ListCreateAPIView):
    queryset = TblCategoria.objects.all()
    serializer_class = CategoriaSerializer
    
class CategoriaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TblCategoria.objects.all()
    lookup_url_kwarg = 'categoria_id'
    serializer_class = CategoriaSerializer
    
    
class EmpresaView(generics.ListCreateAPIView):
    queryset = TblEmpresa.objects.all()
    serializer_class = EmpresaSerializer
    
class EmpresaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TblEmpresa.objects.all()
    lookup_url_kwarg = 'empresa_id'
    serializer_class = EmpresaSerializer
    
class ExperienciaViewSet(viewsets.ModelViewSet):
    queryset = TblExperiencia.objects.all()
    serializer_class = ExperienciaSerializer
    
class JornadaViewSet(viewsets.ModelViewSet):
    queryset = TblJornada.objects.all()
    serializer_class = JornadaSerializer
    
class ModalidadViewSet(viewsets.ModelViewSet):
    queryset = TblModalidad.objects.all()
    serializer_class = ModalidadSerializer