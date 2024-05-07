const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    distributorId : String,
    company : String,
    model : String,
    price : String,
    imageUrl : String,
    description : String,
    rented : String,
    rentedBy : String
});

module.exports = mongoose.model('Vehicle', dataSchema, 'vehicles');