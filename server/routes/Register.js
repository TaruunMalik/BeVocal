// const express = require("express");
import express from "express";
import brcypt from "bcrypt";
const router = express.Router();

import UserSchema from "../models/User.js";

const saltRounds = 10;
const salt = brcypt.genSaltSync(saltRounds);
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

router.route("/").post(async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDocu = await UserSchema.create({
      username,
      password: brcypt.hashSync(password, salt),
    });
    res.json(userDocu).status(200);
  } catch (error) {
    console.log(error);
    res
      .json({
        errr: "cannot work",
      })
      .status(400);
  }
});

export default router;
