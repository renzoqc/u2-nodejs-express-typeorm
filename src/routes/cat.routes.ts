import express from "express";
import {
    createCatController, deleteCatController,
    getAllCatsController,
    getCatByIdController,
    updateCatController
} from "../controllers/cat.controller";

const router = express.Router()

router.get('/', getAllCatsController)
router.get('/:id', getCatByIdController)
router.post('/', createCatController)
router.put('/:id', updateCatController)
router.delete('/:id', deleteCatController)

export default router