import mongoose from 'mongoose';
const {
  Schema,
  model,
  Types: { ObjectId }
} = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  author: { type: ObjectId, required: true, ref: 'User' },
  body: { type: String, required: true },
  genre: { type: String, enum: ['fantasy', 'sci-fi', 'history', 'sports', 'tv/movies', 'code'], required: true },
  date: { type: Date, default: Date.now }
});

export default model('Post', postSchema);
