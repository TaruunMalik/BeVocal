import express from "express";

const router = express.Router();
import PostSchema from "../models/Post.js";

router.route("/:_id").get(async (req, res) => {
  const id = req.params._id;
  try {
    const onePost = await PostSchema.findById(id).populate("author", [
      "username",
    ]);
    res.status(200).json({
      success: true,
      data: onePost,
    });
  } catch (error) {
    res.status(500).json("No post with such id found!");
  }
});

export default router;
