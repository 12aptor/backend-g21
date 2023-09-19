const express = require('express')
const {config} = require('../../config')
const cors = require('cors')

require('../../libs/mongoose.lib')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'microservicio de catalogo activo'
    })
})

app.use('/categories',require('../../routes/category.route'))
app.use('/products',require('../../routes/product.route'))

app.listen(config.mscatalogo.port,function(){
    console.log(`ms catalogo : http://localhost:${config.mscatalogo.port}`)
})