"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user_controller");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/users', user_controller_1.crearUsuario);
usersRoutes.post('/getUsers', user_controller_1.getUsuarios);
