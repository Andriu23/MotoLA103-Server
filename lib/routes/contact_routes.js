"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRoutes = void 0;
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact_controller");
const contactsRoutes = (0, express_1.Router)();
exports.contactsRoutes = contactsRoutes;
contactsRoutes.post('/contacts', contact_controller_1.crearContact);
contactsRoutes.get('/contacts', contact_controller_1.getContacts);
