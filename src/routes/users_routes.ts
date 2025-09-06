import { Router } from "express";
import { crearUsuario, getUsuarios } from "../controllers/user_controller";

const usersRoutes = Router();

usersRoutes.post('/users', crearUsuario);
usersRoutes.get('/users', getUsuarios);

export {usersRoutes};