const userController = {}

const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')
const {config} = require('../config')

const jwt = require('jsonwebtoken')

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

userController.getOne = async (req,res) => {
    try{
        const user = await userModel.findById(req.params.id)
        res.json({
            id:user._id,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }catch(err){
        res.status(502).json({
            message:err.message
        })
    }
}

userController.updateOne = async (req,res) => {
    try{
        const hash = await bcrypt.hash(req.body.password,10)
        req.body.password = hash
        await userModel.findByIdAndUpdate(req.params.id,req.body)
        const user = await userModel.findById(req.params.id)
        res.status(201).json({
            'id':user._id,
            'email':user.email
        })
    }catch(err){
        res.status(502).json({
            message:err.message
        })
    }
}

userController.deleteOne = async (req,res) =>{
    await userModel.findByIdAndDelete(req.params.id)
    res.sendStatus(202)
}

userController.auth = async (req,res)=>{
    try{
        const userAuth = await userModel.findOne({email:req.body.email})
        if(await bcrypt.compare(req.body.password,userAuth.password)){
            const token = jwt.sign({
                id:userAuth._id,
                email: userAuth.email
            },config.jwt_secret)

            res.status(200).json({
                token:token
            })
        }else{
            res.status(404).json({
                message: ' usuario o password invalidos'
            })
        }
    }catch(err){
        res.status(502).json({
            message:'error : '+ err.message
        })
    }
}


module.exports = userController