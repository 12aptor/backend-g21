const mysql2 = require('mysql2')

const mysqlConnection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_tareas_express',
    port:'3306'
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err)
        return
    }else{
        console.log('conectado a la base de datos...')
    }
})

module.exports = mysqlConnection