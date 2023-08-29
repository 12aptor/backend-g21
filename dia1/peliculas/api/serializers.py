from rest_framework import serializers

from .models import Pelicula

class PeliculaSerializer(serializers.Serializer):
    titulo = serializers.CharField()
    descripcion = serializers.CharField()
    
    def create(self, validated_data):
        return Pelicula.objects.create(**validated_data)