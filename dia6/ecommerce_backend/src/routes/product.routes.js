const express = require('express')
const ProductService = require('../services/product.service')

const boom  = require('@hapi/boom')

function productApi(app){
    const router = express.Router()
    app.use('/product',router)

    const objProduct = new ProductService()

    router.get('/',async function(req,res){
        try{
            const data = await objProduct.getAll()
            res.status(200).json(data)
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })
}

module.exports = productApi