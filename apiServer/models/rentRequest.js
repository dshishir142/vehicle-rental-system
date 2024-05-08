const mongoose = require('mongoose');

const rentRequestSchema = new mongoose.Schema({
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rentalDate: { type: Date, required: true },
    status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('RentRequest', rentRequestSchema, 'rentRequest');
