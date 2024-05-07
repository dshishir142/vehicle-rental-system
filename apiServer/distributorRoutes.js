const express = require('express');
const router = express.Router();
const distributor = require('./distributorController');

router.get('/',distributor.getAll);
router.post('/',distributor.createDistri);
router.delete('/:id',distributor.delete);
router.patch('/:id',distributor.patch);

module.exports = router;