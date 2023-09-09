const express = require('express')
const {config} = require('./config')
const cors = require('cors')

const categoryApi = require('./routes/category.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use(function (req, res, next) {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    console.log('Time:', today.toISOString());
    next();
});

app.use('/categories',(req,res,next)=>{
    console.log('request url : ',req.originalUrl)
    next()
})

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