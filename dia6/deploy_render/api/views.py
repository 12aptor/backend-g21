from rest_framework import generics

from rest_framework.permissions import IsAuthenticated

from .models import (
    Mesa,Categoria,
    Plato,
    Pedido
)

from .serializers import (
    MesaSerializer,
    CategoriaSerializer,
    PlatoSerializer,
    CategoriaPlatoSerializer,
    PedidoSerializerPOST,
    PedidoSerializerGET
)

class MesaView(generics.ListAPIView):
    queryset = Mesa.objects.all()
    serializer_class = MesaSerializer
    
class CategoriaView(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class PlatoView(generics.ListAPIView):
    queryset = Plato.objects.all()
    serializer_class = PlatoSerializer
    
class CategoriaPlatosView(generics.RetrieveAPIView):
    queryset = Categoria.objects.all()
    lookup_url_kwarg = 'categoria_id'
    serializer_class = CategoriaPlatoSerializer
    
class PedidoRegisterView(generics.CreateAPIView):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializerPOST
    
class PedidoDashboardView(generics.ListAPIView):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializerGET
    permission_classes = [IsAuthenticated]