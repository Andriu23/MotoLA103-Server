import { Router } from "express";
import { crearCliente, deleteCliente, getClienteById, getClientes, updateCliente } from "../controllers/client_controller";

const clientsRoutes = Router();

clientsRoutes.post('/clients', crearCliente);
clientsRoutes.get('/clients', getClientes);
clientsRoutes.put('/clients', updateCliente);
clientsRoutes.delete('/clients', deleteCliente);
clientsRoutes.get('/clients/:id', getClienteById);

export {clientsRoutes};