const express = require('express');
const router = express.Router();
const rentRequestController = require('./rentRequestController');

router.post('/', rentRequestController.createRentRequest);

router.get('/', rentRequestController.getRentRequests);

module.exports = router;
