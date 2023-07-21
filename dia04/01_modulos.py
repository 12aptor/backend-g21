"""Importamos todo el modulo"""
import modulo

resultado = modulo.suma(10, 4)
print(resultado)
print(modulo.usuario)
print(modulo.variable)

"""Importamos solo la función suma y el diccionario usuario"""
from modulo import suma, usuario

print(suma(10, 4))
print(usuario)