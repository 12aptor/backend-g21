from rest_framework import serializers
from .models import Movimiento

class MovimientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movimiento
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        if instance.tipo == '1':
            tipo = "INGRESO"
        else:
            tipo = "EGRESO"
        representation['tipo'] = tipo
        return representation