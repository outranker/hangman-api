const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { oxfordApi } = require('../services');

const getDefinition = catchAsync(async (req, res) => {
  const remoteAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  console.log('ip address: ', remoteAddress);
  const definitionResult = await oxfordApi.getDefinition(req.query.word);
  if (definitionResult) {
    res.status(httpStatus.CREATED).json({ result: definitionResult });
  } else {
    res.sendStatus(500);
  }
});

module.exports = {
  getDefinition,
};
