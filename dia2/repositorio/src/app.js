const express = require('express')
const {config} = require('./config')
const cors = require('cors')

const fileUpload = require('express-fileupload')

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())

app.set('port',config.port)

app.get('/',(req,res)=>{
    res.json({
        "success":true,
        "message":"api rest de ecommerce con MONGODB"
    })
})

app.use('/categories',require('./routes/category.route'))
app.use('/products',require('./routes/product.route'))
app.use('/user',require('./routes/user.route'))

module.exports = app