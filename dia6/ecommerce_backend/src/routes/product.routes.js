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

    router.post('/',async function(req,res){
        try{
            const body = req.body
            const data = await objProduct.create(body)
            res.status(201).json(data)
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.get('/:id',async (req,res)=>{
        try{
            const {id} = req.params
            const data = await objProduct.findOne(id)
            res.status(200).json(data)
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.put('/:id',async (req,res)=>{
        try{
            const {id} = req.params
            const body = req.body
            const data = await objProduct.update(id,body)
            res.status(201).json(data)
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.delete('/:id',async (req,res)=>{
        try{
            const {id} = req.params
            const data = await objProduct.delete(id)
            if(data){
                res.sendStatus(201)
            }
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

}

module.exports = productApi