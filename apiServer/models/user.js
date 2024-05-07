const mongoose = require('mongoose');

// Schema for the user data in the database
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rentedVehicles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vehicle'
        }
    ]
});

module.exports = mongoose.model('User', userSchema, 'users');