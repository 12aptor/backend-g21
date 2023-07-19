def miFuncion():
    print("Hola Mundo")

# miFuncion()

# Crear una funcion que sume dos numeros cualquiera

def suma(a, b):
    return a + b

# print(suma(5, 4))


# Recibir una lista de argumentos o parametros (*args)
def suma2(*args):
    return sum(args)

# print(suma2(1, 2.5, 3, 4, 5, 6))


# Recibir argumentos arbitrarios con clave-valor (**kwargs)
def personas(**args):
    print(args)

personas(nombre="Juan", apellido="Perez", edad=25)

# Definir un parametro por defecto
def suma3(a=3, b=5):
    return a + b

print(suma3(6, 6))