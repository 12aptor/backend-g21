const {config} = require('../config')
const cloudinary = require('cloudinary').v2

          
cloudinary.config({ 
  cloud_name: config.cloudinary.cloud_name, 
  api_key: config.cloudinary.api_key, 
  api_secret: config.cloudinary.api_secret 
});

async function uploadImage(uploadPath){
    return new Promise((res,rej)=>{
        cloudinary.uploader.upload(uploadPath,(err,result)=>{
            if(!err) res(result.secure_url)
            else rej(err)
        })
    })
}

module.exports = {uploadImage}