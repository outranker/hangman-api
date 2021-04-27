const Joi = require('joi');

const getDefinition = {
  query: Joi.object().keys({
    word: Joi.string().required(),
  }),
};

module.exports = {
  getDefinition,
};
