const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../Models/User");
const Post = require("../../Models/Post");
const Profile = require("../../Models/Profile");

//@route         Post api/post
//@desc          Register route
//@access        Private

router.post(
  "/",
  [auth, [check("text", "Text is reuired").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route         Get api/posts
//@desc          Get All posts
//@access        Private

router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route         Get api/posts/id
//@desc          Get post bu ID
//@access        Private

router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
  } catch (err) {
    console.error(err.message);
    if (err.kind === "objectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route         Delete api/post
//@desc          Delet a post
//@access        Private

router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    //Check user owner

    if (post.user.toString() !== req.user.id) {
      return res.status(401).res.send({ msg: "User not authorized" });
    }
    await post.remove();

    res.json({ msg: "post has been deleted" });

    
  } catch (err) {
    console.error(err.message);
    if (err.kind === "objectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
