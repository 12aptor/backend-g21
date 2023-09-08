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
}

module.exports = categoryApi