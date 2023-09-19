const jwt = require('jsonwebtoken')
const {config} = require('../config')

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization']
    
    if(typeof bearerToken !== 'undefined'){
        const bearer = bearerToken.split(' ')
        const token = bearer[1]       
        try{
            const decoded = jwt.verify(token,config.jwt_secret)
        }catch(err){
            return res.status(401).json({
                message : err.message
            })
        }
        return next()
    }else{
        res.status(403).json({
            message:'no hay token'
        })
    }
}

module.exports = {verifyToken}