"""Polimorfismo en programación es un funcion/metodo/operador
con el mismo nombre que se puede ejecutar en muchas formas"""

texto = "Hola soy un texto"
diccionario = {
    "id": 1,
    "nombre": "Arturo",
    "edad": 30
}
tupla = (1, "Texto", False)
lista = [False, "Texto", 100.5]

print(len(texto)) # ✔️
print(len(diccionario)) # ✔️
print(len(tupla)) # ✔️
print(len(lista)) # ✔️

for letra in texto: # ✔️
    print(letra)

for clave in diccionario: # ✔️
    print(clave)

for item in tupla: # ✔️
    print(item)

for item in lista: # ✔️
    print(item)