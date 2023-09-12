const {models} = require('../lib/sequelize')


class ProductService{
    constructor(){

    }

    async getAll(){
        const result = await models.Product.findAll()
        return result
    }

    async create(data){
        const result = await models.Product.create(data)
        return result
    }
}

module.exports = ProductService