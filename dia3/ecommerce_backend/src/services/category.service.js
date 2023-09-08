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
}

module.exports = CategoryService