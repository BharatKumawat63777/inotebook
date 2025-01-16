const mongoose = require("mongoose");
// import mongoose from "mongoose";
const mongoURI =
  "mongodb+srv://ebharat637:987653210@inotebook.drems.mongodb.net/";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB");
  }
};

module.exports = connectToMongo;
