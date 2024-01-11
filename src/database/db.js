import mongoose from "mongoose";

const connectDatabase = async () => {
    console.log("Wait connecting to the database...");

    try {
        await mongoose.connect(
            process.env.DB_URI
        );
        console.log("MongoDB Atlas connected!");
    } catch(error) {
        console.log(error);
    }
    
};

export default { connectDatabase };