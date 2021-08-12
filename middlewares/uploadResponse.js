import ErrorResponse from '../utils/ErrorResponse.js';

const uploadResponse = (req, res) => {
  const { file, fileValidationError, protocol } = req;
  const host = req.get('host');
  if (!file) throw new ErrorResponse('Please upload one picture', 400);
  if (fileValidationError) throw new ErrorResponse(fileValidationError, 400);
  const location = process.env.AWS_BUCKET
    ? req.file.location
    : `${protocol}://${host}/uploads/${file.filename}`;
  res.status(201).json({
    location
  });
};

export default uploadResponse;
