import { Router } from 'express';
import { getUserInfo, signIn, signUp } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);
authRouter.get('/me', getUserInfo);

export default authRouter;
