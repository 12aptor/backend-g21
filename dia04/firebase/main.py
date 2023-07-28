import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate('token.json')
firebase_admin.initialize_app(cred)

print("conexión exitosa")

from firebase_admin import firestore

db = firestore.client()

col_proyectos = db.collection('proyectos')
lista_proyectos = col_proyectos.get()

for doc_proyecto in lista_proyectos:
    print(doc_proyecto.to_dict())