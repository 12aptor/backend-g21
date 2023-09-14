const categoryController = {}

const CategoryModel = require('../models/category.model')

categoryController.create = async (req,res)=>{
    try{
        const newCategory = new CategoryModel(req.body)
        await newCategory.save()
        res.status(201).json(newCategory)
    }catch(err){
        res.status(502).json({
            message:'error :'+ err.message
        })
    }
}

module.exports = categoryController