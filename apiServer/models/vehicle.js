const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    distributorId: String,
    company: String,
    model: String,
    price: String,
    imageUrl: String,
    description: String,
    type : String,
    rented: {
        type: Boolean,
        default: false
    },
    rentedBy: {
        type: String,
        default: null 
    }
});

module.exports = mongoose.model('Vehicle', vehicleSchema, 'vehicles');
