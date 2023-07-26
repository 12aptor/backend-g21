# Crear un proyecto de Flask

## Crear un entorno virtual

```bash
python -m venv venv
```

## Activar el entorno virtual

```bash
# Linux o Mac
source venv/bin/activate
# CMD
venv\Scripts\activate
```

## Instalar Flask

```bash
pip install flask
```

## Ignoramos nuestro entorno virtual

Dentro de nuestro archivo `.gitignore` agregamos la siguiente línea:

```bash
/venv
```

## Creamos nuestro archivo `app.py`

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hola mundo'

if __name__ == '__main__':
    app.run(debug=True, port=5000)
