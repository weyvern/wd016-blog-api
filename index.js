import 'dotenv/config.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import postsRouter from './routes/postsRouter.js';
import errorHandler from './middlewares/errorHandler.js';
import uploadHandler from './middlewares/uploadHandler.js';
import uploadValidationHandler from './middlewares/uploadValidationHandler.js';
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

app.use(express.json());
app.use('/posts', postsRouter);
app.post('/image-upload', uploadHandler.single('image'), uploadValidationHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
