import { Router } from "express";
import { crearProducto, deleteProducto, getProductoById, getProductos, updateProducto } from "../controllers/product_controller";
import { authenticateToken } from "../middleware/user_middleware";

const productosRoutes = Router();

productosRoutes.post('/products', authenticateToken, crearProducto);
productosRoutes.get('/products', getProductos);
productosRoutes.put('/products', authenticateToken, updateProducto);
productosRoutes.delete('/products/:id', authenticateToken, deleteProducto);
productosRoutes.get('/products/:id', authenticateToken, getProductoById);

export {productosRoutes};