class MiClase:
    def metodoNormal(self):
        self.__metodoPrivado()

    def __metodoPrivado(self):
        print("Soy un método privado")

clase = MiClase()

clase.metodoNormal()