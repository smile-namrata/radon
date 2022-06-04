const ten = function(){
const ben = "  this is string text"
console.log(ben.trim())
}

const lower = function(){
    const av = "  THIS TEXT WILL BE CONVERTED INTO LOWER CASE"
    console.log(av.toLowerCase())
    }
    
 
const upper = function(){
    const bc = " this text will be converted into upper case"
    console.log(bc.toUpperCase())
    }
 
    
    module.exports.ten = ten
    module.exports.lower = lower
    module.exports.upper = upper
    
