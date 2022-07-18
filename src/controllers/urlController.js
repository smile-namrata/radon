const { model } = require("mongoose")
const urlModel = require("../models/urlModel")
const shortid = require('shortid')

const createUrl = async function(req,res){
    try{
        let data = req.body
        let urlDecodedCode = shortid.generate(data)
        let shortDecodedUrl = "https://localhost:3000/"+urlDecodedCode
        data.shortUrl = shortDecodedUrl
        data['urlCode'] = urlDecodedCode
        let result = await urlModel.create(data)
        return res.status(201).send({status:true, data:result})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err.message})
    }

}

const getUrl = async function(req,res){

    let code = req.params.urlCode
    if(!shortid.isValid(code)){
        return res.status(400).send({status:false,msg:"Invalid Code"})
    }
    let getLongUrl = await urlModel.findOne({urlCode:code}).select({_id:0,longUrl:1})
     res.status(200).send({status:true,data:getLongUrl})

}

module.exports = {createUrl,getUrl}