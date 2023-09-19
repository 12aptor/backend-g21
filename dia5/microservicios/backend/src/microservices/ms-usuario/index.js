const express = require('express')
const {config} = require('../../config')
const cors = require('cors')

require('../../libs/mongoose.lib')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'microservicio de usuario activo'
    })
})

app.use('/user',require('../../routes/user.route'))

app.listen(config.msusuario.port,function(){
    console.log(`ms catalogo : http://localhost:${config.msusuario.port}`)
})