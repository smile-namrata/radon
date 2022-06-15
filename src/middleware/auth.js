const jwt=require("jsonwebtoken");
const userModel=require("../models/userModel")


const authentication= function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if(token){next()}
    if (!token){ token = req.headers["x-auth-token"];
          if(token)
                {next()  
    }
    if (!token) return res.send({ status: false, msg: "token must be present" });
}
}



//module.exports.authentication=authentication


const auth= function(req,res,next){
// try{
    let token = req.headers["x-auth-token"];
    let decodedToken=jwt.verify(token,"functionup-radon");
    //console.log(decodedToken)
    let userToBeMOdified=req.params.userToBeMOdified
    let userLoggedId=decodedToken.userId

    if(userToBeMOdified!=userLoggedId) return res.send({status: false,msg:"user logged in tho llowed "})
    next()

    // }catch(error){
    //     res.status(404).snd(error);
    // }
}


module.exports.authentication=authentication
module.exports.auth=auth