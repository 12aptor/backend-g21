class Tamagochi:
    def __init__(self, nombre):
        self.nombre = nombre
        self.hambre = 3
        self.energia = 3
        self.felicidad = 3

    def alimentar(self):
        if self.hambre > 0:
            self.hambre -= 2

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


# import time

# class Tamagotchi:
#     def __init__(self):
#         self.name = ""
#         self.hunger = 100
#         self.happiness = 100
#         self.health = 100

#     def feed(self):
#         self.hunger -= 20

#     def play(self):
#         self.happiness += 20

#     def sleep(self):
#         self.health += 20

#     def tick(self):
#         self.hunger -= 10
#         self.happiness -= 5
#         self.health -= 2

#     def is_alive(self):
#         return self.hunger > 0 and self.happiness > 0 and self.health > 0

#     def __str__(self):
#         return f"Name: {self.name}\nHunger: {self.hunger}\nHappiness: {self.happiness}\nHealth: {self.health}"

# def main():
#     tamagotchi = Tamagotchi()
#     tamagotchi.name = input("What's your Tamagotchi's name? ")

#     while tamagotchi.is_alive():
#         print(tamagotchi)
#         action = input("What do you want to do? (feed, play, sleep) ")
#         if action == "feed":
#             tamagotchi.feed()
#         elif action == "play":
#             tamagotchi.play()
#         elif action == "sleep":
#             tamagotchi.sleep()
#         time.sleep(1)
#         tamagotchi.tick()

#     if not tamagotchi.is_alive():
#         print(f"{tamagotchi.name} has died!")

# if __name__ == "__main__":
#     main()