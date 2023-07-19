class Vehiculo:
    """Metodos mágicos: Que son método predefinido que realizan una
    tarea en especifico"""

    def __init__(self, elColor, laMarca):
        self.color = elColor
        self.marca = laMarca
    
    def __str__(self):
        return f"Vehiculo {self.color} de marca {self.marca}"

    """Dentro de una class una función se convierte en metodo
        y este metodo recibe como primer parametro a self"""
    def obtenerColor(self):
        return self.color

auto1 = Vehiculo("Rojo", "Mitsubishi")
auto2 = Vehiculo("Verde", "Toyota")
auto3 = Vehiculo("Azul", "Nissan")
auto4 = Vehiculo("Negro", "Porshe")
auto5 = Vehiculo("Blanco", "Audi")

vehiculos = [auto1, auto2, auto3, auto4, auto5]

for vehiculo in vehiculos:
    if vehiculo.color == "Rojo":
        print("Existe un vehiculo rojo")