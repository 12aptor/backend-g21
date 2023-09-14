const productController = {}

const productModel = require('../models/products.model')

productController.create = async (req,res)=>{
    try{
        const newProduct = new productModel(req.body)
        await newProduct.save()
        res.json(newProduct)
    }catch(err){
        res.status(502).json({
            message:'error ' + err.message
        })
    }
}

productController.getAll = async (req,res)=>{
    const products = await productModel.find()
    res.status(200).json(products)
}

module.exports = productController