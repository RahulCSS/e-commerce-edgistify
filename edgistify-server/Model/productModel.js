import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true  },
    description: { type: String, required: true},
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true},
    imageUrl: [ String ],
},{ timestamps: true, minimize: false});

const productModel = mongoose.models.edgistifyproduct || mongoose.model('edgistifyproduct', productSchema);

export default productModel;