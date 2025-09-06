import express from "express";
import { productosRoutes } from "./routes/product_routes";
import { contactsRoutes } from "./routes/contact_routes";
import { clientsRoutes } from "./routes/client_routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Middleware para procesar datos 'application/x-www-form-urlencoded'
app.use(express.urlencoded({extended: true}));

app.use('/api', productosRoutes);
app.use('/api', contactsRoutes);
app.use('/api', clientsRoutes);

app.listen(port, () => {
    return console.log(`Estoy corriendo en el puerto ${port}`);
});