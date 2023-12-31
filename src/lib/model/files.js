import mongoose from "mongoose";

const fileModel = new mongoose.Schema({
    type: String,
    number: Number,
    file: String,
})

export const files = mongoose.models.files || mongoose.model("files", fileModel)