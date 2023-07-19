miDiccionario = {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Perez",
    "edad": 25,
    "estado": False
}

# Acceder a un valor
# print(miDiccionario["nombre"])

# Crear un diccionario
nuevoDiccionario = dict(nombre="Juan", apellido="Perez", edad=25, estado=False)

# Cambiar un valor
miDiccionario["estado"] = True

# Agregar un valor
miDiccionario["dni"] = 12345678

# Eliminar un valor
# miDiccionario.pop("dni")
# del miDiccionario["estado"]
# miDiccionario.clear()
# print(miDiccionario)

# Recorrer un diccionario
for key in miDiccionario:
    print(miDiccionario[key])