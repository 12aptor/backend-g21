from rest_framework import generics

from .models import (
    TblCategoria,TblEmpresa
)

from .serializers import (
    CategoriaSerializer,
    EmpresaSerializer
)

class CategoriaView(generics.ListCreateAPIView):
    queryset = TblCategoria.objects.all()
    serializer_class = CategoriaSerializer
    
class EmpresaView(generics.ListCreateAPIView):
    queryset = TblEmpresa.objects.all()
    serializer_class = EmpresaSerializer