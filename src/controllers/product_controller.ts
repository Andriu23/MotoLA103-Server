import { Request, Response } from "express";
import { dbConnection } from "../db/mongo_connect";
import { ObjectId } from "mongodb";

export const crearProducto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const collection = await dbConnection('products');
        const document = await collection.insertOne(data);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al insertar el documento ${error}`});
    }
};

export const getProductos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('products');
        const filteredDocs = await collection.find(query).toArray();    
        return res.status(200).json(filteredDocs);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar los documentos ${error}`});
    }
};

export const updateProducto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const productData = req.body;
        const collection = await dbConnection('products');
        const document = await collection.updateOne(query, { $set: productData});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al actualizar el documento ${error}`});
    }
};

export const deleteProducto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('products');
        const document = await collection.deleteOne(query);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al eliminar el documento ${error}`});
    }
};

export const getProductoById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const productoId = req.params.id;
        const collection = await dbConnection('products');
        const document = await collection.findOne({_id : new ObjectId(productoId)});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar el documento ${error}`});
    }
};