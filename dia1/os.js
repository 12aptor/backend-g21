const os = require('os')

const procesador = os.arch()
const sistema = os.platform()
const cpu = os.cpus().length
const memoria = os.totalmem()

console.log('procesador : ' + procesador)
console.log('sistema    : ' + sistema)
console.log('cpu        : ' + cpu)
console.log('memoria    : ' + memoria)
/* implementar una promesa que permita mostrar
la memoria ram en kb,mb y gb
1024 bytes = 1 kb
1024 kb = 1 mb
1024 mb = 1 gb
*/