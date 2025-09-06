import { Router } from "express";
import { crearContact, getContacts } from "../controllers/contact_controller";

const contactsRoutes = Router();

contactsRoutes.post('/contacts', crearContact);
contactsRoutes.get('/contacts', getContacts);

export {contactsRoutes};