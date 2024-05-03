const mongoose = require('mongoose')

//Schema for the data in database
const dataSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

module.exports = mongoose.model('Data', dataSchema);