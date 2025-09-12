"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClienteById = exports.deleteCliente = exports.updateCliente = exports.getClientes = exports.crearCliente = void 0;
const mongo_connect_1 = require("../db/mongo_connect");
const mongodb_1 = require("mongodb");
const bcrypt_1 = __importDefault(require("bcrypt"));
/*export const crearCliente = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const collection = await dbConnection('clients');
        const document = await collection.insertOne(data);
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al insertar el documento ${error}`});
    }
};*/
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // Validar datos mínimos
        if (!data.usuario || !data.password) {
            return res.status(400).json({ message: "El nombre de usuario y la contraseña son obligatorios" });
        }
        const collection = yield (0, mongo_connect_1.dbConnection)("clients");
        // Verificar si ya existe un cliente con ese nombre de usuario
        const existe = yield collection.findOne({ usuario: data.usuario });
        if (existe) {
            return res.status(400).json({ message: "El usuario ya fue creado" });
        }
        // Encriptar contraseña antes de guardar
        const saltRounds = 10;
        const passwordHash = yield bcrypt_1.default.hash(data.password, saltRounds);
        // Reemplazar la contraseña original por la encriptada
        data.password = passwordHash;
        // Guardar en la colección "clients"
        const document = yield collection.insertOne(data);
        return res.status(201).json({
            message: "Cliente creado correctamente",
            id: document.insertedId,
        });
    }
    catch (error) {
        return res.status(500).json({ message: `Error al insertar el documento: ${error}` });
    }
});
exports.crearCliente = crearCliente;
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const collection = yield (0, mongo_connect_1.dbConnection)('clients');
        const filteredDocs = yield collection.find(query).toArray();
        return res.status(200).json(filteredDocs);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al buscar los documentos ${error}` });
    }
});
exports.getClientes = getClientes;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const clientData = req.body;
        const collection = yield (0, mongo_connect_1.dbConnection)('clients');
        const document = yield collection.updateOne(query, { $set: clientData });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al actualizar el documento ${error}` });
    }
});
exports.updateCliente = updateCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*const query = req.query;*/
        const clientId = req.params.id;
        const collection = yield (0, mongo_connect_1.dbConnection)('clients');
        /*const document = await collection.deleteOne(query);*/
        const document = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(clientId) });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al eliminar el documento ${error}` });
    }
});
exports.deleteCliente = deleteCliente;
const getClienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clienteId = req.params.id;
        const collection = yield (0, mongo_connect_1.dbConnection)('clients');
        const document = yield collection.findOne({ _id: new mongodb_1.ObjectId(clienteId) });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al buscar el documento ${error}` });
    }
});
exports.getClienteById = getClienteById;
