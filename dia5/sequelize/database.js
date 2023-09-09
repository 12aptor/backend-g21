const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : './db.sqlite'
})

sequelize.authenticate()
.then(()=>console.log('base de datos creada'))
.catch(err=>console.log("error : " + err))
