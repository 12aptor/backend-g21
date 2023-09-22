const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name:{
        type:String,
        require:true,
        minlength:2,
        maxlength:255
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:2
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type: Schema.Types.ObjectId,
        Ref:"categories"
    }
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model('products',ProductSchema)