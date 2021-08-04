import ErrorResponse from '../utils/ErrorResponse.js';

const uploadValidationHandler = (req, res) => {
  const { file, fileValidationError } = req;
  if (!file) throw new ErrorResponse('Please upload one picture', 400);
  if (fileValidationError) throw new ErrorResponse(fileValidationError);
  res
    .status(201)
    .json({
      location: `${process.env.BASE_URL || 'http://localhost:5000/uploads/'}${file.filename}`
    });
};

export default uploadValidationHandler;
