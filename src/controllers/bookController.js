const express = require("express")
const authorModel= require("../models/bookAuthor")
const bookModel= require("../models/bookModel")


// ============================================


const createAuthor=  async function (req, res){
    let Data = req.body
    let savedData = await authorModel.create(Data)
    
    res.send(savedData)
}


const createbook = async function (req, res){  
    
    let data = req.body
    let SavedData = await bookModel.create(data)
   
    res.send(SavedData)
}


// ============================================
const booksChetanBhagat = async function (req, res){
    let dataOfBhagat = await authorModel.find({ author_name:"Chetan Bhagat"}).select("author_id")
    console.log(dataOfBhagat)
   let allBooks = await bookModel.find({author_id : dataOfBhagat[0 ].author_id
 })
 res.send(allBooks)
}


// ============================================
const authorOfBook = async function(req, res) {
    let book = await bookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } }, { new: true })
    let author = await authorModel.find({ author_id: book.author_id }).select("author_name");
    let cost = book.price
    res.send({ msg: author, cost })
}

// ============================================
const costList = async function(req,res){
    const bookData = await bookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id:1, _id:0 })
    const id = bookData.map(inp => inp.author_id)

    let temp = []

    for(let i=0;i<id.length;i++){
        let x = id[i]
        const author = await authorModel.find({ author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const author_name = temp.flat()
    res.send({msg: author_name})
}


// ====================(Export all APIs)========================


module.exports.createAuthor = createAuthor

module.exports.createbook = createbook

module.exports.booksChetanBhagat = booksChetanBhagat

module.exports.costList = costList

module.exports.authorOfBook = authorOfBook

