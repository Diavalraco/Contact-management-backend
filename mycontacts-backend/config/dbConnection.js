const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDb = async () => {
  try {
    // Retrieve the MongoDB connection string from environment variables
    const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/contacts';



    await mongoose.connect(connectionString);

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

module.exports = connectDb;
