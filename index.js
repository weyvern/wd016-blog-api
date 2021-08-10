import 'dotenv/config.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import postsRouter from './routes/postsRouter.js';
import errorHandler from './middlewares/errorHandler.js';
import uploadHandler from './middlewares/uploadHandler.js';
import uploadResponse from './middlewares/uploadResponse.js';
import './db/mongoose.js';

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

if (process.env.NODE_ENV !== 'production') {
  const morgan = await import('morgan');
  app.use(morgan.default('dev'));
}

app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);
app.use(express.json());
app.use('/auth', authRouter);
app.use('/posts', postsRouter);
app.post('/image-upload', uploadHandler.single('image'), uploadResponse);
app.all('*', (req, res) => res.status(404).json({ error: 'Not found' }));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
