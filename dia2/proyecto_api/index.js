const express = require('express')
const mysqlConnection = require('./database')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'mi primer api rest con express'
    })
})

app.get('/tarea',(req,res)=>{
    mysqlConnection.query('select * from tarea',
    (err,rows,fields)=>{
        if(!err){
            context = {
                'status':false,
                'content':rows
            }
            res.json(context)
        }else{
            console.log(err)
        }
    })
})

app.listen(5000,()=>console.log('http://localhost:5000'))