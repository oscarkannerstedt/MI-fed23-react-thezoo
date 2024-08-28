import { IAnimal } from "./IAnimal";

export interface IAnimalExt extends IAnimal {
    medicine: string;
    isFed: boolean;
    lastFed: string;
    longDescription: string;
    latinName: string;
    yearOfBirth: number;
}