import { Router } from "express";
import { crearContact, deleteContact, getContactById, getContacts, updateContact } from "../controllers/contact_controller";

const contactsRoutes = Router();

contactsRoutes.post('/contacts', crearContact);
contactsRoutes.get('/contacts', getContacts);
contactsRoutes.put('/contacts', updateContact);
contactsRoutes.delete('/contacts/:id', deleteContact);
contactsRoutes.get('/contacts/:id', getContactById);

export {contactsRoutes};