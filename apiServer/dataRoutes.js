const express = require('express');
const router = express.Router();
const datacontroller = require('./dataController');

//to handle get request
router.get('/',datacontroller.getAllData);

//to handle post request
router.post('/',datacontroller.createData);

module.exports = router;