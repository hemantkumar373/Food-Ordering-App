import mongoose from 'mongoose';

const dbconnect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error Connecting to MongoDB ",error.message);
    }
}

export default dbconnect;