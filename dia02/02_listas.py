miLista = ["María", "Pepe", "Marta", "Antonio"]

longitudMiLista = len(miLista)

# print(miLista[0])

# print(miLista[1:5])
# print(miLista[1:])

nuevaLista = []

nuevaLista.append(miLista[1])
nuevaLista.append(miLista[3])

# print(nuevaLista)

# Métedos de las listas

# Quitar un item de la lista
miLista.remove("Pepe")
miLista.pop(1)

# Ordenar la lista
miLista.sort(reverse=True)

# Agrergar un item a la lista
miLista.append("Sandra")
miLista.insert(2, "Miguel")

print(miLista)