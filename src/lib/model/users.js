import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    designation:String
})

export const users = mongoose.models.users || mongoose.model("users",userModel)