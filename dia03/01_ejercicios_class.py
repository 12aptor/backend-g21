class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print(f"Hola soy {self.nombre} y tengo {self.edad} años")


persona1 = Persona("Miguel", 40)

# persona1.saludar()

"""Crear un Objeto Gato que tenga los atributos nombre y color
y que tenga los métodos dormir y estado"""

class Gato:
    def __init__(self, nombre, color):
        self.nombre = nombre
        self.color = color
        self.estaDurmiendo = False

    def cambiarEstado(self, estado):
        self.estaDurmiendo = estado

    def estado(self):
        if self.estaDurmiendo == False:
            print(f"{self.nombre} está despierto")
        else:
            print(f"{self.nombre} está durmiendo")

gato = Gato("Michi", "Blanco")
gato.estaDurmiendo = False
gato.cambiarEstado(True)
gato.estado()

"""Crear un objeto Usuario que tenga los atributos id, nombre, email, password
que tenga un metodo que me muestre sus datos ordenados en un diccionario
y otro metodo que encripte la password del usuario"""

import hashlib

