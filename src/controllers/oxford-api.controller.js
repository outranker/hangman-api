const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { oxfordApi } = require('../services');

const getDefinition = catchAsync(async (req, res) => {
  // console.log(req);
  const definitionResult = await oxfordApi.getDefinition(req.query.word);
  if (definitionResult) {
    res.status(httpStatus.CREATED).json({ result: definitionResult.results });
  } else {
    res.sendStatus(500);
  }
});

module.exports = {
  getDefinition,
};
