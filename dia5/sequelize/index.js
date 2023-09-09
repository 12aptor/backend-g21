const express = require('express')
const {sequelize,Tarea} = require('./database')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'todolist api rest con sequelize'
    })
})

app.get('/tarea',(req,res)=>{
    Tarea.findAll()
    .then(function(result){
        res.json(result)
    })
})

app.post('/tarea',(req,res)=>{
    Tarea.create(
        {
            descripcion: req.body.descripcion,
            estado : req.body.estado
        }
    ).then((data)=>{
        res.json(data)
    })
})

app.get('/tarea/:id',(req,res)=>{
    Tarea.findByPk(req.params.id)
    .then(function(data){
        res.json(data)
    })
})

app.put('/tarea/:id',(req,res)=>{
    Tarea.findByPk(req.params.id)
    .then(function(data){
        data.update({
            descripcion: req.body.descripcion,
            estado:req.body.estado
        }).then(function(dataUpdated){
            res.json(dataUpdated)
        })
    })
})

app.delete('/tarea/:id',(req,res)=>{
    Tarea.findByPk(req.params.id)
    .then((tareaDel)=>{
        tareaDel.destroy()
    }).then((data)=>{
        res.sendStatus(201)
    })
})

app.listen(5000,()=>console.log('servidor activo en http://localhost:5000'))