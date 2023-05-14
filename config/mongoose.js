const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const conn = await mongoose.connect('mongodb+srv://gautampandey076:LjvlL8VRX3HJBMqq@cluster0.vhyet4f.mongodb.net/hospital_api?retryWrites=true&w=majority');
      //const conn = await mongoose.connect('mongodb://127.0.0.1:27017/db');

      console.log("MongoDB Connection Established");
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};
module.exports = connectDB;
