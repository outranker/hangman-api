const config = require('../config/config');
const logger = require('../config/logger');
const axios = require('axios');

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendRequest = async (word) => {
  const { data } = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`, {
    headers: {
      Accept: 'application/json',
      app_id: config.oxfordApi.id,
      app_key: config.oxfordApi.key,
    },
  });
  console.log('this is response:', data);
  return data;
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const getDefinition = async (word, type) => {
  const result = await sendRequest(word);
  return result;
};

module.exports = {
  getDefinition,
};
