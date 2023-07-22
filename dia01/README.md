# Crear un proyecto de Flask

## Crear un entorno virtual

```bash
python -m venv entorno_flask
```

## Activar el entorno virtual

```bash
# Linux o Mac
source entorno_flask/bin/activate
# CMD
entorno_flask\Scripts\activate
```

## Instalar Flask

```bash
pip install flask
```

## Ignoramos nuestro entorno virtual

Dentro de nuestro archivo `.gitignore` agregamos la siguiente línea:

```bash
/entorno_flask
```

## Creamos nuestro archivo `app.py`

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hola mundo'

if __name__ == '__main__':
    app.run(debug=True, port=8000)
```