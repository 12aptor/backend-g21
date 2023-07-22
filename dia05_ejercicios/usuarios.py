import hashlib
import datetime

class Usuario:
    def __init__(self, nombre, apellido, edad, dni, password, correo):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.dni = dni
        self.password = self.__hashPwd(password)
        self.correo = correo

    def toJson(self):
        return {
            "nombre": self.nombre,
            "apellido": self.apellido,
            "edad": self.edad,
            "dni": self.dni,
            "estado": True,
            "creadoEl": str(datetime.datetime.now()),
            "password": self.password,
            "correo": self.correo
        }

    def __hashPwd(self, password):
        encodePwd = password.encode()
        hashPwd = hashlib.sha256(encodePwd).hexdigest()
        return hashPwd