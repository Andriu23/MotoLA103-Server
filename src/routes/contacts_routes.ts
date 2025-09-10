import { Router } from "express";
import { crearContact, deleteContact, getContactById, getContacts, updateContact } from "../controllers/contact_controller";
import { authenticateToken } from "../middleware/user_middleware";

const contactsRoutes = Router();

contactsRoutes.post('/contacts', crearContact);
contactsRoutes.get('/contacts', getContacts);
contactsRoutes.put('/contacts', authenticateToken, updateContact);
contactsRoutes.delete('/contacts/:id', authenticateToken, deleteContact);
contactsRoutes.get('/contacts/:id', getContactById);

export {contactsRoutes};