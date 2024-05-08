const express = require('express');
const router = express.Router();
const datacontroller = require('./userController');

//to handle get request
router.get('/',datacontroller.getAllData);

//to handle post request
router.post('/',datacontroller.createData);

//to handle delete request
router.delete('/:id',datacontroller.deleteUser);

module.exports = router;