from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

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
    permission_classes = [IsAuthenticated]
    queryset = TblEmpresa.objects.all()
    lookup_url_kwarg = 'empresa_id'
    serializer_class = EmpresaSerializer
    
class ExperienciaViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = TblExperiencia.objects.all()
    serializer_class = ExperienciaSerializer
    
class JornadaViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = TblJornada.objects.all()
    serializer_class = JornadaSerializer
    
class ModalidadViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = TblModalidad.objects.all()
    serializer_class = ModalidadSerializer