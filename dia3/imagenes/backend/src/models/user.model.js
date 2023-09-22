const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        match: /.+\@.+\..+/,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps : false,
    versionKey: false
})

UserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('users',UserSchema)