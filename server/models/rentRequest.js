const mongoose = require('mongoose');

const rentRequestSchema = new mongoose.Schema({
    rentcarid: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rentalDate: { type: Date, default: Date.now() },
    requiredhours: { type: Number, required: true },
    rentperhour: { type: Number, required: true },
    totalbill: { type: Number, required: true },
    brand: { type: String},
    model: { type: String },
    status: { type: String, default: 'pending' },
}, {
    timestamps: true
});

module.exports = mongoose.model('RentRequest', rentRequestSchema, 'rentRequest');