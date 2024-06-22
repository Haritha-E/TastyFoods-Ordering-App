import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://harithaeswaran:2873@cluster0.xly3pm0.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}