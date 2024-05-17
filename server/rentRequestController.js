const mongoose = require('mongoose');
const RentRequest = require('./models/rentRequest');

// Ensure database connection
mongoose.connect('mongodb://localhost:27017/vehicle_rental_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

exports.createRentRequest = async (req, res) => {
    try {
        const { items, userId } = req.body;
        const savedRequests = await Promise.all(items.map(async (item) => {
            const {
                rentcarid,
                requiredhours,
                rentperhour,
                totalbill,
                brand,
                model,
                rentalDate
            } = item;
            const newRentRequest = new RentRequest({
                rentcarid,
                requiredhours,
                rentperhour,
                totalbill,
                brand,
                model,
                userid: userId,
                rentalDate: rentalDate || Date.now()
            });
            const savedRequest = await newRentRequest.save();
            return newRentRequest;
        }))
        res.json({ status: 'success', data: savedRequests });
    } catch (error) {
        console.error('Error creating rent request:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};

exports.getRentRequests = async (req, res) => {
    try {
        const rentRequests = await RentRequest.find({}).populate('userId');
        res.json(rentRequests);
    } catch (error) {
        console.error('Error retrieving rent requests:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
