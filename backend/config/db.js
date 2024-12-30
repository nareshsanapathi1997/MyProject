const mongoose = require("mongoose");

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/MyProject';
    try {
        const conn = await mongoose.connect(mongoURI); // Remove deprecated options
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;