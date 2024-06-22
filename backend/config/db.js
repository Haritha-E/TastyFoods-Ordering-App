import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('link').then(()=>console.log("DB Connected"));
}
