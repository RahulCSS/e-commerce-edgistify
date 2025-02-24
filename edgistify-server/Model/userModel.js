import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String, default: '' },
    address: {type: String, default: '' },
    token: { type: String, default: ''},
    cart: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product'},
        quantity: { type: Number, default: 1 }, 
      }],
},{timestamps: true, minimize: false});

const userModel = mongoose.models.edgistifyuser || mongoose.model('edgistifyuser', userSchema);

export default userModel;
