const RentRequest = require('./models/rentRequest');

exports.createRentRequest = async (req, res) => {
    try {
        const { vehicleId, userId, rentalDate } = req.body;
        const newRentRequest = new RentRequest({ vehicleId, userId, rentalDate });
        const savedRequest = await newRentRequest.save();
        res.json({ status: 'success', data: savedRequest });
    } catch (error) {
        console.error('Error creating rent request:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};

exports.getRentRequests = async (req, res) => {
    try {
        const rentRequests = await RentRequest.find().populate('vehicleId userId');
        res.json(rentRequests);
    } catch (error) {
        console.error('Error retrieving rent requests:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
