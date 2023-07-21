"""open recibe dos parametros, el primero es el nombre del archivo y el segundo es el modo de apertura"""
archivo_txt = open("./dia04/prueba.txt", "a")
archivo_txt.write("Hola soy un txt")
archivo_txt.close()

"""Modos de apertura"""
# r: Solo lectura
# r+: Lectura y escritura
# w: Solo escritura. Sobre escribe el archivo si existe. Crea el archivo si no existe
# w+: Escritura y lectura. Sobre escribe el archivo si existe. Crea el archivo si no existe
# a: Añadido (agregar contenido). Crea el archivo si éste no existe
# a+: Añadido (agregar contenido) y lectura. Crea el archivo si éste no existe

"""Leer archivos"""
txt1 = open("./dia04/prueba.txt", "r")
print(txt1.read())
txt1.close()

"""Leer una cantidad de caracteres"""
txt2 = open("./dia04/prueba.txt", "r")
print(txt2.read(5))
txt2.close()

"""Crear un documento python dentro de la carpeta dia04"""
py = open("./dia04/prueba.py", "w")
py.write("x = 10")
py.close()

import prueba

print(prueba.x)