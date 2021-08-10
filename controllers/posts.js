import Post from '../models/Post.js';
import asyncHandler from '../middlewares/asycnHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate('author');
  res.json(posts);
});

export const getSinglePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id).populate('author');
  if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
  res.json(post);
});

export const createNewPost = asyncHandler(async (req, res) => {
  const { title, cover, body, genre } = req.body;
  const { _id: author } = req.user;
  if (!title || !author || !body || !genre)
    throw new ErrorResponse('Title, author, body and genre are required fields');
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
  const { _id: author } = req.user;
  const { title, body, genre } = req.body;
  if (!title || !author || !body || !genre)
    throw new ErrorResponse('Title, author, body and genre are required fields');
  const post = await Post.findById(id);
  if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
  if (String(post.author) !== String(author))
    throw new ErrorResponse(`Cannot edit another user's posts`, 401);
  const updatedPost = await Post.findOneAndUpdate(
    { _id: id },
    { title, author, body, genre },
    { new: true }
  );
  res.json(updatedPost);
});

export const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { _id: author } = req.user;
  const post = await Post.findById(id);
  if (!post) throw new ErrorResponse(`Post with id of ${id} not found`, 404);
  if (String(post.author) !== String(author))
    throw new ErrorResponse(`Cannot delete another user's posts`, 401);
  await post.delete();
  res.json({ success: `Post with id of ${id} was deleted` });
});
