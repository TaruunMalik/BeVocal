import express from "express";

const router = express.Router();

router.route("/").post(async (req, res) => {
  res.cookie("token", "").json("ok");
});

export default router;
