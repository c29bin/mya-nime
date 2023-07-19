import mongoose from "mongoose";



const connectDB = async () => {
    const uri: any = process.env.NEXT_PUBLIC_MONGO_URI
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB.");
    } catch(error) {
        console.log("Error");
    }
}


export default connectDB;