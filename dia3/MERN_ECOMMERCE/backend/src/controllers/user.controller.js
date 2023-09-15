const userController = {}

const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')

userController.create = async (req,res) =>{
    try{
        const hash = await bcrypt.hash(req.body.password,10)
        req.body.password = hash
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).json({
            'id':newUser._id,
            'email':newUser.email
        })
    }catch(err){
        res.status(502).json({
            message:'error : ' + err.message
        })
    }
}

userController.getAll = async (req,res) =>{
    try{
        const users = await userModel.find({},'email isAdmin')
        res.status(200).json(users)
    }catch(err){
        res.status(502).json({
            message:err.message
        })
    }
}


module.exports = userController