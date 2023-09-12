const {Product,ProductSchema} = require('./product.models')
const {Category,CategorySchema} = require('./category.models')

function setupModels(sequelize){
    Product.init(ProductSchema,Product.config(sequelize))
    Category.init(CategorySchema,Category.config(sequelize))

    Product.associate(sequelize.models)
}

module.exports = setupModels