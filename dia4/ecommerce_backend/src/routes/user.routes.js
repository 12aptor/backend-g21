const express = require('express')
const UserService = require('../services/user.service')

const boom = require('@hapi/boom')

function userApi(app){
    const router = express.Router()
    app.use('/user',router)

    const objUser = new UserService()

    router.post('/',async function (req,res){
        const {body:data} = req
        try{
            const newData = await objUser.create({data})
            res.status(201).json(newData)
        }
        catch(err){
            res.status(500).json(boom.badData(err))
        }
    })
}

module.exports = userApi