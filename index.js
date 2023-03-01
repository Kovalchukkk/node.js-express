const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const fileUpload = require("express-fileupload");

mongoose.set("strictQuery", true);

const PORT = 5000;
const DB_URL =
  "mongodb+srv://Mykola:root@cluster0.osfktzr.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
