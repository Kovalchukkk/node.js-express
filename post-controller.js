const PostService = require("./post-service");

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.status(201).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "id was not provided" });
      }
      const post = await PostService.getOne(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        return res.status(400).json({ message: "id was not provided" });
      }
      const updatedPost = await PostService.update(post);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ message: "id was not provided" });
      }
      const post = await PostService.delete(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new PostController();
