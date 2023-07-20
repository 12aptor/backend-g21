class Persona:
    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido

    def mostrarDatos(self):
        return {
            "nombre": self.nombre,
            "apellido": self.apellido
        }

"""El objeto Alumno hereda los atributos del objeto Persona"""
class Alumno(Persona):
    pass


"""Aquí podemos ver que se puede acceder a los atributos y metodos
del objeto Persona a travez del objeto Alumno"""
alumno = Alumno("Raul", "Martinez")

print(alumno.mostrarDatos())
