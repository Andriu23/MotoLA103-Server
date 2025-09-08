import { Router } from "express";
import { crearUsuario, getUsuarios } from "../controllers/user_controller";
import { authenticateToken } from "../middleware/user_middleware";

const usersRoutes = Router();

usersRoutes.post('/users', authenticateToken, crearUsuario);
usersRoutes.post('/getUsers', getUsuarios);

export {usersRoutes};