const express = require("express");
const mongoose = require("mongoose");
const Post = require("./post-model");

mongoose.set("strictQuery", true);

const PORT = 5000;
const DB_URL =
  "mongodb+srv://Mykola:root@cluster0.osfktzr.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  // console.log(req.query.page);
  res.status(200).json("Some useful information");
});

app.post("/posts", async (req, res) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });
    res.status(201).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
