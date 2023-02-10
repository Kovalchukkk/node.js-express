const express = require("express");
const mongoose = require("mongoose");

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

app.post("/users", (req, res) => {
  console.log(req.body);
  res.status(200).json("User is created");
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
