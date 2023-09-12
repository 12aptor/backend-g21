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

    async authenticate({data}){
        try{
            const sqlAuth = `select id,username,password
                             from tbl_user where username = '${data.username}'`
            console.log(sqlAuth)
            const result = await this.db.querySql(sqlAuth)
            console.log(result)
            if(await bcrypt.compare(data.password,result[0].password)){
                const userFound = {
                    id:result[0].id,
                    username:data.username
                }
                return userFound
            }else{
                const userNotFound = {
                    id:0,
                    username:null
                }
                return userNotFound
            }
        }catch(err){
            const userNotFound = {
                id:0,
                username:null
            }
            return  userNotFound
        }
    }
}

module.exports = UserService