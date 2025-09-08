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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductoById = exports.deleteProducto = exports.updateProducto = exports.getProductos = exports.crearProducto = void 0;
const mongo_connect_1 = require("../db/mongo_connect");
const mongodb_1 = require("mongodb");
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const collection = yield (0, mongo_connect_1.dbConnection)('products');
        const document = yield collection.insertOne(data);
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al insertar el documento ${error}` });
    }
});
exports.crearProducto = crearProducto;
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const collection = yield (0, mongo_connect_1.dbConnection)('products');
        const filteredDocs = yield collection.find(query).toArray();
        return res.status(200).json(filteredDocs);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al buscar los documentos ${error}` });
    }
});
exports.getProductos = getProductos;
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const productData = req.body;
        const collection = yield (0, mongo_connect_1.dbConnection)('products');
        const document = yield collection.updateOne(query, { $set: productData });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al actualizar el documento ${error}` });
    }
});
exports.updateProducto = updateProducto;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*const query = req.query;*/
        const productoId = req.params.id;
        const collection = yield (0, mongo_connect_1.dbConnection)('products');
        /*const document = await collection.deleteOne(query);*/
        const document = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(productoId) });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al eliminar el documento ${error}` });
    }
});
exports.deleteProducto = deleteProducto;
const getProductoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productoId = req.params.id;
        const collection = yield (0, mongo_connect_1.dbConnection)('products');
        const document = yield collection.findOne({ _id: new mongodb_1.ObjectId(productoId) });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al buscar el documento ${error}` });
    }
});
exports.getProductoById = getProductoById;
