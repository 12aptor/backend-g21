paso 1 : creación del proyecto

npm init -y

paso 2 : instalación de dependencias

npm install express cors dotenv mongoose
npm install --save-dev nodemon

paso 3 : crear scripts

en el archivo package.json agregar estos scripts en la sección correspendiente

"start": "node src/index.js",
"dev": "nodemon src/index.js",