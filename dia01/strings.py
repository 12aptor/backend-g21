tamagochi = """
≧◠‿◠≦✌
"""

otro_texto = "Asi se ve un: "

# Conocer la longitud de un string
print(len(otro_texto))

# Buscar un caracter en un string
if "mundo" in otro_texto:
    print("Si esta")
else:
    print("No esta")

# Recorrer un string
for letra in otro_texto:
    print(letra)

# Slicing (Rebanar)
print(otro_texto[1:4])
print(otro_texto[:4])
print(otro_texto[4:])

# Formatear un string
edad = 20
nombre = "Juan"
# Primera forma (No es la mejor)
# print("Hola soy {} y tengo {} años".format(nombre, edad))

print(f"Hola soy {nombre} y tengo {edad} años")