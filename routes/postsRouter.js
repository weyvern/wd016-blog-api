import { Router } from 'express';
import {
  getAllPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost
} from '../controllers/posts.js';

const postsRouter = Router();

postsRouter.get('/', getAllPosts);
postsRouter.get('/:id', getSinglePost);
postsRouter.post('/', createNewPost);
postsRouter.put('/:id', updatePost);
postsRouter.delete('/:id', deletePost);

export default postsRouter;
