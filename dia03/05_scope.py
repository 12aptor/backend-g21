"""El scope es el alcance de una variable.
Una variable solo se puede acceder dentro de su alcance"""

def miFuncion():
    a = 10

    def miFuncion2():
        # La variable "a" si tiene alcance aquí
        print(a)

    miFuncion2()

# La variable "a" no tiene alcance aquí
# print(a)

miFuncion()


"""Si queremos que la variable b pertenezca al ambito global
tenemos que utilizar la palabra reservada global"""
def otraFuncion():
    global b
    b = True

otraFuncion()

print(b)