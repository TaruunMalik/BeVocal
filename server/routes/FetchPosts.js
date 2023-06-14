import express from "express";
import PostSchema from "../models/Post.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const allPosts = await PostSchema.find({})
      .populate("author", ["username"])
      .sort({ createdAt: -1 });
    res.status(200).json(allPosts);
    //find().populate('author')
  } catch (e) {
    res.status(500).json("bad network");
  }
});

export default router;
