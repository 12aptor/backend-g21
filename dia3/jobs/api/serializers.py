from rest_framework import serializers

from .models import (
    TblCategoria,
    TblEmpresa,
    TblExperiencia
)

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblCategoria
        fields = '__all__'
        
class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblEmpresa
        fields = '__all__'
        
class ExperienciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblExperiencia
        fields = '__all__'