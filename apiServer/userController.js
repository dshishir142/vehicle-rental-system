const Data = require('./models/user');
const mongoose = require('mongoose');

//to return all the user data
exports.getAllData =  async (req, res) => {
    try{
        const data = await Data.find({});
        res.json(data);
    }catch (err) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}


//to add new users
exports.createData = async (req, res) => {
    try {
      // console.log(req.body);
      const newData = new Data({
        name: req.body.Name_for_posting_data_on_api,
        email: req.body.Email_for_posting_data_on_api,
        password: req.body.password_for_posting_data_on_api
      });
      
      console.log(newData);
      const savedData = await newData.save();
      res.json({ status: "success", id: savedData._id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
};


exports.deleteUser = async (req, res) => {
  try {
      const userId = req.params.id;

      if (!mongoose.Types.ObjectId.isValid(userId)) {
          return res.status(400).send('Invalid User ID');
      }

      const deletedUser = await Data.findByIdAndDelete(userId);

      if (!deletedUser) {
          return res.status(404).send('User not found');
      }

      res.json({ status: "success", message: "User deleted successfully" });
  } catch (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};