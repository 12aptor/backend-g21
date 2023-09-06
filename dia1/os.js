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
function calcularMemoria(capacidad,tipo){
    return new Promise((res,rej)=>{
        let memoria_convertida = capacidad / 1024
        console.log('MEMORIA EN ' + tipo + ' : ' + memoria_convertida.toFixed(2))
        res(memoria_convertida)
        rej("error...")
    })
}

calcularMemoria(memoria,'KB')
    .then((kb)=>calcularMemoria(kb,'MB'))
    .then((mb)=>calcularMemoria(mb,'GB'))