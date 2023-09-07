const express = require('express')
const bp = require('body-parser')


const app = express()
app.use(bp.urlencoded({extended:true}))

app.use(express.static('public'))

app.get('/',function(req,res){
    res.send('<h1><center>Mi primer servidor con express</center></h1>')
})

app.post('/calculadora',(req,res)=>{
    let operacion = req.body.ope
    let n1 = req.body.n1
    let n2 = req.body.n2
    let resultado = 0
    switch(operacion){
        case "suma":
            resultado = parseInt(n1) + parseInt(n2)
            res.send(" la suma es " + resultado)
            break
        case "resta":
            resultado = parseInt(n1) - parseInt(n2)
            res.send(" la resta es " + resultado)
            break
        case "multiplicación":
            resultado = parseInt(n1) * parseInt(n2)
            res.send(" la multiplicación es " + resultado)
            break
        default :
            res.send(" no se encontro la operación solicitada")
    }
})

app.get('/saludo',(req,res)=>{
    let nombre = req.query.nom
    res.send('<h1>Hola ' + nombre + '</h1>')
})

app.get('/suma/:n1/:n2',(req,res)=>{
    const {n1,n2} = req.params

    let suma = parseInt(n1) + parseInt(n2)
    res.send('<h1>la suma de ' + n1 + ' + ' + n2 + ' es ' + suma)
})

app.listen(5000,()=>console.log('servidor en http://localhost:5000'))