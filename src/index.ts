import express from "express";
import { productosRoutes } from "./routes/products_routes";
import { contactsRoutes } from "./routes/contacts_routes";
import { clientsRoutes } from "./routes/clients_routes";
import cors from "cors";
import { usersRoutes } from "./routes/users_routes";
import 'dotenv/config';

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
app.use('/api', usersRoutes);
app.get('/', (req, res) => {
    res.send(process.env.CLAVE_JWT);
})

app.listen(port, () => {
    console.log(`Estoy corriendo en el puerto ${port}`);
});