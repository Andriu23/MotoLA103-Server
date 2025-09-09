import { Router } from "express";
import { crearCliente, deleteCliente, getClienteById, getClientes, updateCliente } from "../controllers/client_controller";
import { authenticateToken } from "../middleware/user_middleware";

const clientsRoutes = Router();

clientsRoutes.post('/clients', crearCliente);
clientsRoutes.get('/clients', getClientes);
clientsRoutes.put('/clients', authenticateToken, updateCliente);
clientsRoutes.delete('/clients/:id', authenticateToken, deleteCliente);
clientsRoutes.get('/clients/:id', getClienteById);

export {clientsRoutes};