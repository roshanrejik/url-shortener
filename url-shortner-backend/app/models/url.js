const mongoose = require("mongoose");
const validator=require('validator')
const Schema=mongoose.Schema
const urlSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    originalUrl:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isURL(value)
            },
            message:function(){
                return 'Not an URL'
            }
        }
    },
    hashedUrl:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})
const URL=mongoose.model('URL',urlSchema)
module.exports=URL