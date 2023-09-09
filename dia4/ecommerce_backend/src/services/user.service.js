const MysqlLib = require('../lib/mysql')
const bcrypt = require('bcryptjs')

class UserService{

    constructor(){
        this.db = new MysqlLib()
    }

    async getLast(){
        const sqlLast = `select id,username
                         from tbl_user order by id desc limit 1`
        const result = await this.db.querySql(sqlLast)
        return result[0]
    }

    async create({data}){
        const passwordHash = await bcrypt.hash(data.password,10)

        const sqlCreate = `insert into tbl_user(username,password)
                           values('${data.username}','${passwordHash}')`

        await this.db.querySql(sqlCreate)
        const result = await this.getLast()
        return result
    }
}

module.exports = UserService