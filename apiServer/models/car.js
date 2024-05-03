const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    company : String,
    model : String,
    price : String,
    imageUrl : String,
    description : String
});

module.exports = mongoose.model('Car', dataSchema);