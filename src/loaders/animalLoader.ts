import { IAnimalExt } from "../models/IAnimalExt";
import { IAnimal } from "../models/IAnimal";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import { IAnimalLoader } from "../models/IAnimalLoader";

export const animalsLoader = async (): Promise <IAnimal[]> => {
    const response= await fetch("https://animals.azurewebsites.net/api/animals");
    const result: IAnimalsResponse = await response.json();
    console.log(result);

    return result;
}

export const animalLoader = async ({ params }: IAnimalLoader) => {
    
    const response = await fetch("https://animals.azurewebsites.net/api/animals/" + params.id);
    const result: IAnimalExt = await response.json();
    console.log(result);

    return result;
}