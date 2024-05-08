const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vehicle = require('./models/vehicle');
const User = require('./models/user');

// Route for getting all rented vehicles
router.get('/', async (req, res) => {
    try {
        // Find all rented vehicles where rented field is true
        const rentedVehicles = await Vehicle.find({ rented: true }).populate({
            path: 'rentedBy',
            model: 'User',
            select: 'name email' // Select the fields you want to include from the User model
        });

        // Send the response with the rented vehicles data
        res.json(rentedVehicles);
    } catch (error) {
        console.error('Error retrieving rented vehicles:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

module.exports = router;
