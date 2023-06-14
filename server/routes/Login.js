import express from "express";
import UserSchema from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

const secret = "ee23rnbfg905g4nw";

router.route("/").post(async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserSchema.findOne({ username });
    const isPassOk = bcrypt.compareSync(password, user.password);
    if (isPassOk) {
      jwt.sign({ username, id: user.id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: false }).json({
          id: user._id,
          username: user.username,
        });
      });
    } else {
      res.status(400).json("Invalid");
    }
    // res.status(200).json(isPassOk);
  } catch (error) {
    console.log(error);
  }
});

export default router;
