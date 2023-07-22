# Entornos virtuales

## Crear un entorno virtual
```bash
python -m venv nombre_entorno
```

## Activar un entorno virtual
```bash
# Git Bash
source nombre_entorno/bin/activate

# CMD
nombre_entorno\Scripts\activate

# Mac
source nombre_entorno/bin/activate
```

## Desactivar un entorno virtual
```bash
deactivate
```

## Instalar una libreria
```bash
pip install nombre_libreria
```

## Para consultar las librerias instaladas
```bash
pip freeze
```

## Agregar librerias a un archivo de requerimientos
```bash
pip freeze > requirements.txt
```