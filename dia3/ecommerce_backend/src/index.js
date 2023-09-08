const express = require('express')
const {config} = require('./config')

const categoryApi = require('./routes/category.routes')

const app = express()
app.use(express.json())


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

categoryApi(app)

app.listen(config.port,()=>console.log('http://localhost:'+config.port))