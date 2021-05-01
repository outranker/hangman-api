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
  const data = await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${word}?strictMatch=false`, {
    headers: {
      Accept: 'application/json',
      app_id: config.oxfordApi.id,
      app_key: config.oxfordApi.key,
    },
  });

  return data;
};
const sendRequestFreeApi = async (word) => {
  const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  return data;
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const getDefinition = async (word) => {
  const result = await sendRequestFreeApi(word);
  if (result.status <= 400) {
    return { type: 'free', data: result.data };
  } else {
    const result2 = await sendRequest(word);
    if (result2.status >= 400) {
      return false;
    } else {
      return { type: 'oxford', data: result2.data };
    }
  }
};

module.exports = {
  getDefinition,
};
