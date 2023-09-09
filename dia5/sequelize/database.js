const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect : 'sqlite',
    storage : './db.sqlite'
})

sequelize.authenticate()
.then(()=>console.log('base de datos creada'))
.catch(err=>console.log("error : " + err))

const Tarea = sequelize.define(
    'tarea',
    {
        descripcion:Sequelize.STRING,
        estado:Sequelize.STRING
    }
)

module.exports = {sequelize,Tarea}
/*
sequelize.sync()
.then(()=>{
    console.log("tabla tarea creada...")
    Tarea.bulkCreate(
        [
            {descripcion:'tarea uno',estado:'pendiente'},
            {descripcion:'tarea dos',estado:'terminado'}
        ]
    )
})*/