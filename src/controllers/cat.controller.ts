import {Request, Response} from "express";
import {createCat, deleteCat, getAllCats, getCatById, updateCat} from "../services/cat.service";
import {CatDTO} from "../dtos/cat.dto";

export const getAllCatsController = async (req: Request, res: Response) => {
    try {
        return res.json(await getAllCats());
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({message: 'Internal server error'});
    }
}

export const getCatByIdController = async (req: Request, res: Response) => {
    try {
        const cat = await getCatById(parseInt(req.params.id))

        if (!cat) {
            return res.status(404).json({message: 'Cat not found'});
        }
        return res.json(cat);
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({message: 'Internal server error'});
    }
}

export const createCatController = async (req: Request, res: Response) => {
    try {
        return res.status(201).json(await createCat(req.body as CatDTO));
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({message: 'Internal server error'});
    }
}

export const updateCatController = async (req: Request, res: Response) => {
    try {
        return res.json(await updateCat(parseInt(req.params.id), req.body as CatDTO));
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({message: 'Internal server error'});
    }
}

export const deleteCatController = async (req: Request, res: Response) => {
    try {
        await deleteCat(parseInt(req.params.id))
        return res.status(204).send();
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({message: 'Internal server error'});
    }
}