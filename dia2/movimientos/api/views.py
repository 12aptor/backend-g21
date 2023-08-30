from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Movimiento
from .serializers import MovimientoSerializer

class MovimientoView(APIView):
    
    def get(self,request):
        data = Movimiento.objects.all()
        serializer = MovimientoSerializer(data,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        ultimo_movimiento = Movimiento.objects.all().order_by('pk').reverse()[:1]
        saldo = ultimo_movimiento[0].saldo
        data = request.data
        if data['tipo'] == '2':
            data['saldo'] = str(float(saldo) - float(data['monto']))
        elif data['tipo'] == '1':
            data['saldo'] = str(float(saldo) + float(data['monto']))
        serializer = MovimientoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data)