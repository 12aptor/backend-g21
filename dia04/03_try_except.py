"""Try: Nos permite probar un bloque de código para buscar errores.
Except: nos permite manejar el error"""
try:
    x = 4/0
except ZeroDivisionError as err:
    print(err)

"""Exception: Nos permite manejar cualquier tipo de error"""
try:
    x = 4/0
    y = "Hola" * 0.5
except Exception as err:
    print(err)

"""Finally: Nos permite ejecutar un código independientemente de si se produjo un error o no"""""
try:
    x = 4/1
except Exception as err:
    print(err)
finally:
    print("Esto se ejecuta siempre")


"""Raise: Nos permite lanzar una excepción"""
try:
    edad = 17
    if edad < 18:
        raise Exception("Usuario menor de edad, detener proceso")
    print("Usuario mayor de edad, puede continuar")
except Exception as err:
    print(err)
finally:
    print("finally")