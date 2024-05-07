const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import Vehicle and User models
const Vehicle = require('./models/vehicle');
const User = require('./models/user');

// Middleware to handle vehicle renting
router.post('/', async (req, res) => {
    const { userId, vehicleId } = req.body;

    // Check if the user and vehicle IDs are provided
    if (!userId || !vehicleId) {
        return res.status(400).json({ message: "User ID and Vehicle ID are required." });
    }

    try {
        // Check if the vehicle is available for renting
        const vehicle = await Vehicle.findById(vehicleId);

        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found." });
        }

        if (vehicle.rented) {
            return res.status(400).json({ message: "Vehicle is already rented." });
        }

        // Update the vehicle document to mark it as rented
        vehicle.rented = true;
        vehicle.rentedBy = userId;
        await vehicle.save();

        // Update the user document to keep track of rented vehicles
        await User.findByIdAndUpdate(userId, { $addToSet: { rentedVehicles: vehicleId } });

        res.status(200).json({ message: "Vehicle rented successfully." });
    } catch (err) {
        console.error("Error renting vehicle:", err);
        res.status(500).json({ message: "Internal server error." });
    }
});

module.exports = router;
