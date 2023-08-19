def mi_decorador(mi_funcion):
    def funcion_decorador():
        print("Esto es un decorador")
        mi_funcion()
        
    return funcion_decorador

@mi_decorador
def foo():
    print("Esto es una función")
foo()


def mayusculas(func):
    def envoltura(texto):
        return func(texto).upper()
    return envoltura

@mayusculas
def mostrar_texto(texto):
    return 'texto : ' + texto

print(mostrar_texto('hola mundo'))