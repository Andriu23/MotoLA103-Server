"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_routes_1 = require("./routes/products_routes");
const contacts_routes_1 = require("./routes/contacts_routes");
const clients_routes_1 = require("./routes/clients_routes");
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = require("./routes/users_routes");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
// Middleware para procesar JSON
app.use(express_1.default.json());
// Middleware para procesar datos 'application/x-www-form-urlencoded'
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', products_routes_1.productosRoutes);
app.use('/api', contacts_routes_1.contactsRoutes);
app.use('/api', clients_routes_1.clientsRoutes);
app.use('/api', users_routes_1.usersRoutes);
app.listen(port, () => {
    return console.log(`Estoy corriendo en el puerto ${port}`);
});
