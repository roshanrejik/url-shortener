const mongoose = require("mongoose");
const validator=require('validator')
const shortHash = require('short-hash');

const Schema=mongoose.Schema

const urlSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
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
        type:String
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})
urlSchema.pre('save', function(next){
    this.hashedUrl=shortHash(this.originalUrl)
    console.log('after update');
    next()
})
const URL=mongoose.model('URL',urlSchema)
module.exports=URL