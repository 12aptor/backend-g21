const os = require('os')

const procesador = os.arch()
const sistema = os.platform()
const cpu = os.cpus().length
const memoria = os.totalmem()

console.log('procesador : ' + procesador)
console.log('sistema    : ' + sistema)
console.log('cpu        : ' + cpu)
console.log('memoria    : ' + memoria)