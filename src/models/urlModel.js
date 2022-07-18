const mongoose = require('mongoose')
const {isValid} = require('shortid')

const urlSchema = new mongoose.Schema({

    urlCode : {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    longUrl:{
        type:String,
        required:true,
        isValid:true,
        trim:true
    },
    shortUrl:{
        type:String,
        unique:true,
        required:true,
        trim:true
    }

})

module.exports = mongoose.model("Url",urlSchema)

