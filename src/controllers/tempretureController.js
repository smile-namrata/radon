let axios = require("axios")


let getWeatherOfLondon = async function (req, res){
  try{  let london = req.query.q 
    let appId = req.query.appid 
var options = {
  method: 'get',
  url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${appId}`,
 
};

 let result = await axios(options)
 let data = result.data
 console.log(result)
 res.status(200).send({msg:data})

}
catch (err) {
   
    res.status(500).send({ msg: err.message })
}
}

let getTempofLondon = async function (req, res){
    try{  let london = req.query.q 
      let appId = req.query.appid 
  var options = {
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${appId}`,
   
  };
  
   let result = await axios(options)
   let data = result.data
   res.status(200).send({msg:data.main.temp})
  
  }
  catch (err) {
     
      res.status(500).send({ msg: err.message })
  }
  }














let getSortedCities = async function (req, res){
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        
        let cityObjectArray = []

        for (i=0 ; i<cities.length; i++){
            
            let obj = { city:cities[i]} 
            let options = {
                method: "get",
                url:
                `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=46552bbc201bba2172ca8fd46dd2ae90`    
            }
            let resp = await axios(options)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjectArray.push(obj)
        }
        let sortedArray = cityObjectArray.sort(function (abc,xyz){
            return abc.temp-xyz.temp
        })
        console.log(sortedArray)
        res.status(200).send({ status:true , msg:sortedArray})
    }
    catch (err) {
     
        res.status(500).send({ msg: err.message })
}}

module.exports.getWeatherOfLondon = getWeatherOfLondon
module.exports.getTempofLondon = getTempofLondon
module.exports.getSortedCities = getSortedCities
