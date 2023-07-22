"""Vamos a recibir los datos de un usuario y vamos a tratarlos
para que se muestren de la siguiente manera:"""
# Nombre: Juan
# Apellido: Perez
# Edad: 30
# DNI: 12345678
# Contraseña: 1234juan
# Correo: juan.perez@gmail

from usuarios import Usuario
from bd import usuarios
from pprint import pprint

def main():
    for usuario in usuarios:
        user = Usuario(
            nombre=usuario['nombre'],
            apellido=usuario['apellido'],
            edad=usuario['edad'],
            dni=usuario['dni'],
            password=usuario['password'],
            correo=usuario['correo']
        )
        pprint(user.toJson())

if __name__ == "__main__":
    main()