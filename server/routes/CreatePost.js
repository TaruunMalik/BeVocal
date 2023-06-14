import express from "express";
import multer from "multer";
import fs from "fs";
import PostSchema from "../models/Post.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const uploadFile = multer({ dest: "uploads/" });
const secret = "ee23rnbfg905g4nw";

router.route("/").post(uploadFile.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const extensionWhole = originalname.split(".");
  const ext = extensionWhole[extensionWhole.length - 1];
  const newPath = path.replace(/\\/g, "/") + "." + ext;
  fs.renameSync(path, newPath);
  const { content, summary, title } = req.body;

  const { token } = req.cookies;

  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const PostNew = await PostSchema.create({
      title,
      summary,
      content,
      photo: newPath,
      author: info.id,
    });
    res.status(200).json({
      postD: PostNew,
    });
  });
});

router.route("/:_id").put(uploadFile.single("file"), async (req, res) => {
  // res.json({ test: 33, fileIs: req.file });
  let newPath = null;

  if (req.file) {
    const { originalname, path } = req.file;
    const extensionWhole = originalname.split(".");
    const ext = extensionWhole[extensionWhole.length - 1];
    newPath = path.replace(/\\/g, "/") + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await PostSchema.findById(id);
    const authorsame =
      JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    // res.status(200).json({ jjj: authorsame });
    await postDoc.updateOne({
      title,
      summary,
      content,
      photo: newPath ? newPath : postDoc.photo,
    });
    res.json(postDoc);
  });
});

export default router;
