import {CatRepository} from "../repositories/cat.repository";
import {CatDTO} from "../dtos/cat.dto";

export const getAllCats = async () => {
    return await CatRepository.find()
}

export const createCat = async (cat: CatDTO) => {
    return await CatRepository.save(cat)
}

export const getCatById = async (id: number) => {
    return await CatRepository.findOneBy({id})
}

export const updateCat = async (id: number, cat: CatDTO) => {
    await CatRepository.update(id, cat)
    return await getCatById(id)
}

export const deleteCat = async (id: number) => {
    await CatRepository.delete(id)
}