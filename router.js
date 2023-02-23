const express = require("express");
const PostController = require("./post-controller");

const router = express.Router();

router.post("/posts", PostController.create);

router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);

module.exports = router;