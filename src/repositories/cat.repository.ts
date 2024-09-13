import {AppDataSource} from "../data-source";
import {Cat} from "../entities/cat.entity";

export const CatRepository = AppDataSource.getRepository(Cat)