const Post = require("./post-model");

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.status(201).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
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
      const post = await Post.findById(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        return res.status(400).json({ message: "id was not provided" });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new PostController();
