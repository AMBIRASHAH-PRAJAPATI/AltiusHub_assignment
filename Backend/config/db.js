const mongoose = require("mongoose");
require("dotenv").confuig();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      userNewUrlParser: true,
      userUnifiedTopology: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
