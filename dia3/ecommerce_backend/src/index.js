const express = require('express')
const {config} = require('./config')

const app = express()


app.get('/',(req,res)=>{
    try{
        res.json({
            'message':'servidor activo'
        })
    }catch(err){
        res.status(500).json({
            'error':err
        })
    }
})

app.listen(config.port,()=>console.log('http://localhost:'+config.port))