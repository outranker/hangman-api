const express = require('express');
const validate = require('../../middlewares/validate');
const oxfordApiValidation = require('../../validations/oxford-api.validation');
const oxfordApiController = require('../../controllers/oxford-api.controller');

const router = express.Router();

router.get('/get-word-definition', validate(oxfordApiValidation.getDefinition), oxfordApiController.getDefinition);
module.exports = router;
