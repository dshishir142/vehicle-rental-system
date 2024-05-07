const Distributor = require('./models/distributor');

exports.getAll = async (req, res) => {
    try{
        const distri = await Distributor.find({});
        res.json(distri);
    } catch (err){
        console.log(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}


exports.createDistri = async (req, res) => {
    try{
        const newDistri = new Distributor(req.body);
        const savedData = await newDistri.save();
        res.json({status : "successful", id : savedData._id});
    } catch (err){
        console.log(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}



exports.delete = async (req, res) => {
    try {
        const distriId = req.params.id;
        const deletedDistri = await Distributor.findByIdAndDelete(distriId);
        if (!deletedDistri) {
            return res.status(404).json({ status: 'error', message: 'Car not found' });
        }
        res.json({ status: 'success', message: 'Car deleted successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};
