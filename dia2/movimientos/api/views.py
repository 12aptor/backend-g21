from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Movimiento
from .serializers import MovimientoSerializer

class MovimientoView(APIView):
    
    def get(self,request):
        data = Movimiento.objects.all()
        serializer = MovimientoSerializer(data,many=True)
        return Response(serializer.data)