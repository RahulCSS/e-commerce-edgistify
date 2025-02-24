import express from 'express';
import { addProduct,getProduct, getAllProduct, updateProduct, deleteProduct } from '../controller/productController.js';
const productRoute = express.Router();

productRoute.post('/addproduct',addProduct);
productRoute.get('/getallproduct/',getAllProduct);
productRoute.get('/getproduct/:id',getProduct);
productRoute.put('/updateproduct/:id', updateProduct);
productRoute.delete('/deleteproduct/:id', deleteProduct);

export { productRoute };
