import time

nombre = ""

hambre = 0
felicidad = 0
energia = 0

def alimentar():
    global hambre
    hambre = hambre - 10

def jugar():
    global felicidad
    global energia
    felicidad = felicidad + 10
    energia = energia - 5

def dormir():
    global energia
    global hambre
    global felicidad
    energia = energia + 10
    hambre = hambre + 5
    felicidad = felicidad - 5

def revisarEstado():
    print("Hambre: " + str(hambre))
    print("Felicidad: " + str(felicidad))
    print("Energia: " + str(energia))

def tamagochi():
    global nombre
    global energia
    global hambre
    global felicidad
    nombre = input("Nombra a tu tamagochi: ")

    while True:
        accion = input("¿Que quieres hacer? (alimentar, jugar, dormir, estado): ")

        if accion == "alimentar":
            alimentar()
        elif accion == "jugar":
            jugar()
        elif accion == "dormir":
            dormir()
        elif accion == "estado":
            revisarEstado()
        else:
            print("Accion invalida. Prueba de nuevo.")
        
        hambre = hambre + 1
        felicidad = felicidad - 1
        energia = energia - 1
        time.sleep(1)
    
tamagochi()
