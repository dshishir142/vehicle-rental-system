const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

const url = 'mongodb://localhost:27017/vehicle_rental_system';

mongoose.connect(url);

const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Data = mongoose.model('Data', dataSchema);

app.route('/api/data')
  .get(async (req, res) => {
    try {
      const data = await Data.find({});
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }})

  .post(async (req, res) => {
    try {
      const newData = new Data(req.body);
      const savedData = await newData.save();
      res.json({ status: "success", id: savedData._id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});