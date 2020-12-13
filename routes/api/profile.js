const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");


const User = require("../../Models/User");
const Profile = require("../../Models/Profile");


//@route GET api/me
//@desc Get current users profiles
//@ access Public

router.get("/me", auth, async (req, res) => {
//   console.log(req.user.id);
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar", "_t"]);

    if (!profile) {
      return res.status(400).json({ msg: "there is no profile for this user" });
    }
    
    // res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/profile
// @desc  Create or Update users profiles
// @ access Private

router.post(
  "/",
  [
    auth,
    check("status", "status is required").not().isEmpty(),
    check("skills", "skills is require").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      status,
      location,
      website,
      skills,
    } = req.body;

    const profileFields = {};
    if (name) profileFields.name = name;
    if (website) profileFields.website = website;
    if (status) profileFields.status = status;
    if (location) profileFields.location = location;
    if (skills) {
      profileFields.skills = skills
        .split(",")
        .map((skill) => skill.trim());
    }
    try {
      //update
      profile = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: studentprofileFields },
        {useFindAndModify: false}
      );
      profile.save();
      return res.json(studentprofile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// router.get('/' , auth , async (req , res) =>{
//   try {
//     const profiles = await User.find().populate('user' , ['name' , 'avatar']);
//     res.json(profiles)
//   } catch (err) {
//     res.status(500).send('server Error')
//   }
// } )
module.exports = router;