from rest_framework import serializers

from .models import (
    TblCategoria,
    TblEmpresa
)

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblCategoria
        fields = '__all__'
        
class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblEmpresa
        fields = '__all__'