const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const tempretureController = require("../controllers/tempretureController")
const mamesController = require("../controllers/mamesController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getByDistrict", CowinController.getDistrictSessions)
router.get("/getWeatherOfLondon", tempretureController
.getWeatherOfLondon)
router.get("/getTempofLondon", tempretureController.getTempofLondon)
router.get("/getSortedCities", tempretureController.getSortedCities)
router.get("/getMames", mamesController.getMames)
router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/createMeme", mamesController.createMeme)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;