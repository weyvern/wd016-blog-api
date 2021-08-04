import Post from '../models/Post.js';
import asyncHandler from '../middlewares/asycnHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

export const getSinglePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
  res.json(post);
});

export const createNewPost = asyncHandler(async (req, res) => {
  const { title, cover, author, body, genre } = req.body;
  const newPost = await Post.create({
    title,
    cover,
    author,
    body,
    genre
  });
  res.status(201).json(newPost);
});

export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, author, body, genre } = req.body;
  const updatedPost = await Post.findOneAndUpdate(
    { _id: id },
    { title, author, body, genre },
    { new: true }
  );
  res.json(updatedPost);
});

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Post.deleteOne({ _id: id });
  res.json({ success: `Post with id of ${id} was deleted` });
});
