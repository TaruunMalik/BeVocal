// const express = require("express");
import express from "express";
// const cors = require("cors");
import cors from "cors";
import * as dotenv from "dotenv";
import connectDb from "./connect.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.json({ limit: "50mb" }));

app.use("/uploads", express.static(`${__dirname}/uploads`));
// Routes
import registerRoutes from "./routes/Register.js";
import loginRoutes from "./routes/Login.js";
import logoutRoutes from "./routes/Logout.js";
import createPostRoutes from "./routes/CreatePost.js";
import fetchAllPosts from "./routes/FetchPosts.js";
import individualRoutes from "./routes/IndividualPost.js";
// import openAiCreation from "./routes/CreateUsingAI.js";

dotenv.config();
const secret = "ee23rnbfg905g4nw";

app.get("/", (req, res) => {
  res
    .json({
      yess: "ok",
      no: "no ok",
    })
    .status(200);
});

app.use("/v1/register", registerRoutes);
app.use("/v1/login", loginRoutes);
app.use("/v1/logout", logoutRoutes);
app.use("/v1/create-post", createPostRoutes);
app.use("/v1/post-edit", createPostRoutes);
app.use("/v1/get-posts", fetchAllPosts);
app.use("/v1/post", individualRoutes);
// app.use("/v1/create-ai", openAiCreation);

app.get("/profile", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  // res.json(req.cookies);
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
  } catch (error) {
    console.log("Error aagai.");
  }
  app.listen(8000, () => {
    console.log("http://localhost:8000");
  });
};

startServer();
