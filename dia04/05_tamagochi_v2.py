class Tamagochi:
    def __init__(self, nombre):
        self.nombre = nombre
        self.hambre = 3
        self.energia = 3
        self.felicidad = 3

    def alimentar(self):
        if self.hambre > 0:
            self.hambre -= 1

    def dormir(self):
        if self.energia < 255:
            self.energia += 2

    def jugar(self):
        if self.felicidad < 255:
            self.felicidad += 1
        if self.energia > 0:
            self.energia -= 1

    def actualizar(self):
        if self.hambre < 255:
            self.hambre += 1
        if self.felicidad > 0:
            self.felicidad -= 1
        if self.energia > 0:
            self.energia -= 1

    def estaVivo(self):
        if self.hambre < 5 and self.felicidad < 5 and self.energia < 5:
            return True
        return False

    def estado(self):
        print(f"Hambre: {self.hambre}")
        print(f"Energia: {self.energia}")
        print(f"Felicidad: {self.felicidad}")

def main():
    tamagochi = Tamagochi("Catgochi")
    while True:
        tamagochi.estado()
        print("""1. Alimentar tamagochi\n2. Hacer que juegue\n3. Hacer que descanse""")
        accion = input("¿Qué deseas hacer? ")
        if accion == "1":
            tamagochi.alimentar()
        elif accion == "2":
            tamagochi.jugar()
        elif accion == "3":
            tamagochi.dormir()
        else:
            print("Opcion incorrecta")
        tamagochi.actualizar()

        if tamagochi.estaVivo() == False:
            print("Tu tamagochi ha muerto")
            break
        

if __name__ == "__main__":
    main()