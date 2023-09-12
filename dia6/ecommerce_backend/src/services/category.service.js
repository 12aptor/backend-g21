const MysqlLib = require('../lib/mysql')
const {models} = require('../lib/sequelize')

class CategoryService{

    constructor(){
        this.db = new MysqlLib()
    }

    async getAll(){
        //const sqlAll = "select id,name from tbl_category"
        //const result = await this.db.querySql(sqlAll)
        const result = await models.Category.findAll({ include: 'products' })
        return result
    }

    async create({data}){
        const sqlCreate = `insert into tbl_category(name)
                           values('${data.name}')`

        await this.db.querySql(sqlCreate)
        const sqlLast = `select id,name from tbl_category
                         order by id desc limit 1`
        const result = await this.db.querySql(sqlLast)
        return result
    }

    async getById(id){
        /*const sqlGetById = `select id,name from tbl_category
                            where id = ${id}`*/
        const result = await models.Category.findByPk(id,{ include:'products'})
        return result
    }

    async update({data,id}){
        const sqlUpdate = `update tbl_category set
                           name = '${data.name}'
                           where id = ${id}`
        await this.db.querySql(sqlUpdate)
        const sqlUpdated = `select id,name from tbl_category
                            where id = ${id}`
        const result = await this.db.querySql(sqlUpdated)
        return result
    }

    async delete(id){
        const sqlDelete = `delete from tbl_category
                           where id = ${id}`
        await this.db.querySql(sqlDelete)
        return true;
    }
}

module.exports = CategoryService