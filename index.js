const express = require("express");

const PORT = 5000;
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

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
