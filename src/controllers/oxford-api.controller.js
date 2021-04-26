const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { oxfordApi } = require('../services');

const getDefinition = catchAsync(async (req, res) => {
  const definition = await oxfordApi.getDefinition(req.params.word);

  res.status(httpStatus.CREATED).send(definition);
});

module.exports = {
  getDefinition,
};
