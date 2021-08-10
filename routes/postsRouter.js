import { Router } from 'express';
import {
  getAllPosts,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost
} from '../controllers/posts.js';
import verifyToken from '../middlewares/verifyToken.js';

const postsRouter = Router();

postsRouter.get('/', getAllPosts);
postsRouter.get('/:id', getSinglePost);
postsRouter.post('/', verifyToken, createNewPost);
postsRouter.put('/:id', updatePost);
postsRouter.delete('/:id', deletePost);

export default postsRouter;
