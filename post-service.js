const Post = require("./post-model");

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("id was not provided");
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("id was not provided");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

module.exports = new PostService();
