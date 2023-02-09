const express = require("express");

const PORT = 5000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Some useful information");
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
