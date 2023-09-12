const {Category,CategorySchema} = require('./category.models')
const {Product,ProductSchema} = require('./product.models')


function setupModels(sequelize){
    Category.init(CategorySchema,Category.config(sequelize))
    Product.init(ProductSchema,Product.config(sequelize))
    
    Product.associate(sequelize.models)
    Category.associate(sequelize.models)
}

module.exports = setupModels