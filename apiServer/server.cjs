const express = require('express');
const mongoose = require('mongoose');
const userroutes = require('./userRoutes');
const vehicleroutes = require('./vehicleRoutes');
const distributorroutes = require('./distributorRoutes');
const renting = require('./renting');
const rentedVehicles = require('./rentedVehicles');
const rentrequest = require('./rentRequestRoutes');
const cors = require('cors')
const app = express();

//port for the server to run
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//for user data
app.use('/api/user', userroutes);

//for vehicle data
app.use('/api/vehicle', vehicleroutes);

//for distributor data
app.use('/api/distributor', distributorroutes);

//for vehicle renting
app.use('/api/rent', renting);

//for rented vehicles
app.use('/api/rentedvehicles', rentedVehicles);

//for rent request
app.use('/api/rentrequest', rentrequest);

const url = 'mongodb://localhost:27017/vehicle_rental_system';
mongoose.connect(url);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
