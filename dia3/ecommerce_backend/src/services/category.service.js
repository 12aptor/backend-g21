const MysqlLib = require('../lib/mysql')

class CategoryService{

    constructor(){
        this.db = new MysqlLib()
    }

    async getAll(){
        const sqlAll = "select id,name from tbl_category"
        const result = await this.db.querySql(sqlAll)
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
}

module.exports = CategoryService