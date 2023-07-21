"""El modulo datetime nos permite trabajar con fechas y horas"""
import datetime

now = datetime.datetime.now()

"""Podemos acceder a los atributos de la fecha y hora actual"""
print(now.year)
print(now.month)
print(now.day)


"""Podemos crear una fecha y hora especifica"""
xDatetime = datetime.datetime(2000, 6, 20)
print(xDatetime)