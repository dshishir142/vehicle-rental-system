const express = require('express');
const router = express.Router();
const carcontroller = require('./vehicleController');

router.get('/',carcontroller.getAllCar);
router.post('/',carcontroller.createCar);
router.delete('/:id',carcontroller.deleteCar);

module.exports = router;