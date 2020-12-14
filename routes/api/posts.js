const express = require("express")
const router = express.Router()
const {check , validationResult} = require('express-validator')




//@route         Post api/post
//@desc          Register route
//@access        Private

router.get("/", (req , res ) => res.send('posts route'))


module.exports = router