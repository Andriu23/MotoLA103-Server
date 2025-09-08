import { Router } from "express";
import { crearProducto, deleteProducto, getProductoById, getProductos, updateProducto } from "../controllers/product_controller";

const productosRoutes = Router();

productosRoutes.post('/products', crearProducto);
productosRoutes.get('/products', getProductos);
productosRoutes.put('/products', updateProducto);
productosRoutes.delete('/products/:id', deleteProducto);
productosRoutes.get('/products/:id', getProductoById);

export {productosRoutes};