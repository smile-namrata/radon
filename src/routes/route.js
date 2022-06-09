const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// ---------Create Author and Books----
router.post("/createBook", BookController.createbook)
router.post("/createAuthor", BookController.createAuthor)

// --------------Books By Chetan Bhagat------
router.get("/booksChetanBhagat", BookController.booksChetanBhagat )

// ----------------------author Of Book two state 
router.get("/authorOfBook", BookController.authorOfBook)

// ---------- Cost & Author Name 
router.get("/costList", BookController.costList)


module.exports = router;