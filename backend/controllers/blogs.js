import Blog from "../models/blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log(blogs);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createBlog = async (req, res) => {
  const { title, description, selectedFile, creator, tags } = req.body;
  const newBlog = new Blog({ title, description, selectedFile, creator, tags });
  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
