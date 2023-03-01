const Post = require("./post-model");
const FileService = require("./file-service");

class PostService {
  async create(post, picture) {
    const fileName = await FileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
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
