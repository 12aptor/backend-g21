const {Product,ProductSchema} = require('./product.models')

function setupModels(sequelize){
    Product.init(ProductSchema,Product.config(sequelize))
}

module.exports = setupModels