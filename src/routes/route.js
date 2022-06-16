const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMd = require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", commonMd.authentication , userController.getUserData)
router.post("/users/:userId/posts",commonMd.authorization,  userController.postMessage)

router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

module.exports = router;