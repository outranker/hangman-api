const express = require('express');
const oxfordApiController = require('../../controllers/oxford-api.controller');

const router = express.Router();

router.get('/get-word-definition', oxfordApiController.getDefinition);
module.exports = router;
