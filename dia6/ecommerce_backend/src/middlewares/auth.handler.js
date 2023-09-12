const jwt = require('jsonwebtoken')
const {config} = require('../config')

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization']
    console.log(bearerToken)
    if(typeof bearerToken !== 'undefined'){
        const bearer = bearerToken.split(' ')
        const token = bearer[1]
        console.log('jwt : ' + token)
        try{
            const decoded = jwt.verify(token,config.jwt_secret)
            console.log(decoded)
            return next()
        }catch(err){
            return res.status(401).json({
                message : err.message
            })
        }
    }else{
        res.status(403).json({
            message : 'no se encontro token'
        })
    }
}

module.exports = {verifyToken}