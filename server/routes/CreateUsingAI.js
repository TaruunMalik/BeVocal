// import { Configuration, OpenAIApi } from "openai";
// import * as dotenv from "dotenv";
// import express from "express";
// import axios from "axios";
// dotenv.config();
// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const router = express.Router();
// const openai = new OpenAIApi(config);

// router.route("/").get((req, res) => {
//   res.send("hELLO");
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const prompt = req.body.prompt;
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: "What do you know about spiderman",
//       max_tokens: 2048,
//       temperature: 0.5,
//     });
//     res.status(200).json(response);
//   } catch (e) {
//     res.status(400).json(e);
//   }
// });

// export default router;
