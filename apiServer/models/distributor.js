const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    location : String,
    username : String,
    password : String
});

module.exports = mongoose.model('Distributor', dataSchema, 'distributors');