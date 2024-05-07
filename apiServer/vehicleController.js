const Car = require('./models/vehicle');

exports.getAllCar = async (req, res) => {
    try{
        const car = await Car.find({});
        res.json(car);
    } catch (err){
        console.log(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}


exports.createCar = async (req, res) => {
    try{
        const newCar = new Car(req.body);
        const savedData = await newCar.save();
        res.json({status : "successful", id : savedData._id});
    } catch (err){
        console.log(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}



exports.deleteCar = async (req, res) => {
    try {
        const carId = req.params.id;
        const deletedCar = await Car.findByIdAndDelete(carId);
        if (!deletedCar) {
            return res.status(404).json({ status: 'error', message: 'Car not found' });
        }
        res.json({ status: 'success', message: 'Car deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
