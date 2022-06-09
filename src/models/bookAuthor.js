const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
      

        author_id:{
            required : true,
            type : Number
        },
        author_name:String,
        age:Number,
        address:String
    
  


},{ timestamps: true });


module.exports = mongoose.model('author', authorSchema) 

