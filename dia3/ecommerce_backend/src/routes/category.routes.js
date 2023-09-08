const express = require('express')
const CategoryService = require('../services/category.service')

function categoryApi(app){
    const router = express.Router()
    app.use('/category',router)

    const objCategory = new CategoryService()

    router.get('/',async function(req,res){
        try{
            const data = await objCategory.getAll()
            res.status(200).json(data)
        }catch(err){
            res.status(500).json({
                'error':err
            })
        }
    })


    router.post('/',async function(req,res){
        const {body : data} = req
        try{
            const newData = await objCategory.create({data})
            res.status(201).json(newData[0])
        }
        catch(err){
            res.status(500).json({
                'error':err
                })
        }
    })

    router.get('/:id',async function(req,res){
        const {id} = req.params
        try{
            const data = await objCategory.getById(id)
            if (data.length > 0){
                res.status(200).json(data[0])
            }else{
                res.status(204).json({
                    'message':'no hay registros'
                })
            }
        }catch(err){
            res.status(500).json({
                'error':err
            })
        }
    })

    router.put('/:id',async function(req,res){
        const {id} = req.params
        const {body : data} = req

        try{
            const updateData = await objCategory.update({data,id})
            if(updateData.length > 0){
                res.status(201).json(updateData[0])
            }else{
                res.status(204)
            }
        }catch(err){
            res.status(500).json({
                'error':err
            })
        }
    })
}

module.exports = categoryApi