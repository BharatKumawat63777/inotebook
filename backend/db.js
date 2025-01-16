const mongoose = require("mongoose");
require('dotenv').config();
// import mongoose from "mongoose";
const mongoURI = process.env.MONGOURI;
console.log("Mongo URL: ",mongoURI)
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB");
  }
};

module.exports = connectToMongo;
