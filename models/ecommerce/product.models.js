import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);