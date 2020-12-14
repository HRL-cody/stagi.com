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
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

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

    const { company, website, location, bio, status, skills } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.compnay = company;
    if (website) profileFields.website = website;
    if (status) profileFields.status = status;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (skills) {
      profileFields.skills = skills.split(",").map((skill) => skill.trim());
    }
    console.log(profileFields.skills);
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //update
        profile = await Profile.findByIdAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      profile.save();
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//Get api/profile/ALL
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});
//Get api/profile/:user_id'
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: " Profile not found " });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "objectId") {
      return res.status(400).json({ msg: "Profile not found " });
    }
    res.status(500).send("server Error");
  }
});

//Delete   api/profile/
//Delete   Delete Profile , user
router.delete("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOneAndRemove(
      { user: req.user.id },
      { useFindAndModify: false }
    );
    await User.findOneAndRemove(
      { _id: req.user.id },
      { useFindAndModify: false }
    );

    res.json({ msg: "User removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});

// Put api/profile/education
// Add exp
router.put(
  "/education",
  [
    auth,
    [
      check("school", "school is require").not().isEmpty(),
      check("degree", "degree is require").not().isEmpty(),
      check("fieldofstudy", "Field of study is require").not().isEmpty(),
      check("from", "From Date is require").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { school, degree, fieldofstudy, from, to } = req.body;

    const newEducation = { school, degree, fieldofstudy, from, to };
    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.education.unshift(newEducation);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//delet Education
router.delete("/education/:edu_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.education
      .map((item) => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
