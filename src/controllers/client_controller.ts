import { Request, Response } from "express";
import { dbConnection } from "../db/mongo_connect";
import { ObjectId } from "mongodb";

export const crearCliente = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const collection = await dbConnection('clients');
        const document = await collection.insertOne(data);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al insertar el documento ${error}`});
    }
};

export const getClientes = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('clients');
        const filteredDocs = await collection.find(query).toArray();    
        return res.status(200).json(filteredDocs);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar los documentos ${error}`});
    }
};

export const updateCliente = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const clientData = req.body;
        const collection = await dbConnection('clients');
        const document = await collection.updateOne(query, { $set: clientData});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al actualizar el documento ${error}`});
    }
};

export const deleteCliente = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('clients');
        const document = await collection.deleteOne(query);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al eliminar el documento ${error}`});
    }
};

export const getClienteById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const clienteId = req.params.id;
        const collection = await dbConnection('clients');
        const document = await collection.findOne({_id : new ObjectId(clienteId)});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar el documento ${error}`});
    }
};