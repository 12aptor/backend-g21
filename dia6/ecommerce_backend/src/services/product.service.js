const {models} = require('../lib/sequelize')


class ProductService{
    constructor(){

    }

    async getAll(){
        const result = await models.Product.findAll({ include: 'category' })
        return result
    }

    async create(data){
        const result = await models.Product.create(data)
        return result
    }

    async findOne(id){
        const result = await models.Product.findByPk(id)
        return result
    }

    async update(id,data){
        const productUpdate = await this.findOne(id)
        const result = await productUpdate.update(data)
        return result
    }

    async delete(id){
        const productDelete = await this.findOne(id)
        await productDelete.destroy()
        return true
    }
}

module.exports = ProductService