# Operadores aritméticos

5 + 5 # Suma
5 - 5 # Resta
5 * 5 # Multiplicación
5 / 5 # División
5 ** 5 # Potencia
5 // 5 # División entera
5 % 5 # Módulo

# Operadores de comparación

5 == 5 # Igualdad
5 != 5 # Desigualdad
6 > 5 # Mayor que
6 >= 5 # Mayor o igual que
5 < 6 # Menor que
6 <= 6 # Menor o igual que

# Operadores lógicos

True and True # AND
True or False # OR
not True # NOT

x = None

if not x:
    print("Se cumple la condición")

# Operadores de identidad

a = ["hola", "mundo"]
b = ["hola", "mundo"]
c = a

print(a is b) # False
print(a is c) # True