const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'mi primer api rest con express'
    })
})

app.listen(5000,()=>console.log('http://localhost:5000'))