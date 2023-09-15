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

productController.getOne = async (req,res)=>{
    const product = await productModel.findById(req.params.id)
    res.json(product)
}

productController.updateOne = async (req,res)=>{
    await productModel.findByIdAndUpdate(req.params.id,req.body)
    const product = await productModel.findById(req.params.id)
    res.json(product)
}

productController.deleteOne = async (req,res)=>{
    await productModel.findByIdAndDelete(req.params.id)
    res.sendStatus(202)
}

module.exports = productController