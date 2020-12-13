const express = require("express")
const router = express.Router()




//@route         Post api/post
//@desc          Register route
//@access        Public

router.get("/", (req , res ) => res.send('posts route'))


module.exports = router