const {models} = require('../lib/sequelize')


class ProductService{
    constructor(){

    }

    async getAll(){
        const result = await models.Product.findAll()
        return result
    }
}

module.exports = ProductService