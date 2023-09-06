const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('<h1>Mi primer servidor con express</h1>')
})

app.listen(5000,()=>console.log('servidor en http://localhost:5000'))