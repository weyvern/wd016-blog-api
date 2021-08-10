import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import asyncHandler from '../middlewares/asycnHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const generateToken = (data, secret) => jwt.sign(data, secret, { expiresIn: '1800s' });

export const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    throw new ErrorResponse('Name, email and password are required', 400);
  const found = await User.findOne({ email });
  if (found) throw new ErrorResponse('Email is already taken', 403);
  const hashPassword = await bcrypt.hash(password, 5);
  const { _id } = await User.create({ name, email, password: hashPassword });
  const token = generateToken({ _id }, process.env.JWT_SECRET);
  res.status(200).json({ token });
});

export const signIn = asyncHandler(async (req, res) => {
  const token = generateToken({ _id: 'asdafghjklñ' }, '12345');
  res.status(200).json({ token });
});

export const getUserInfo = asyncHandler(async (req, res) => {
  res.send('User');
});
