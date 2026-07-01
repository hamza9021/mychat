import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoInstance = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB", mongoInstance.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;
