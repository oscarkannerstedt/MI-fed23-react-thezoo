import { IAnimalExt } from "../models/IAnimalExt";
import { IAnimal } from "../models/IAnimal";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import { IAnimalLoader } from "../models/IAnimalLoader";

export const animalsLoader = async (): Promise <IAnimal[]> => {

    const storedAnimals = localStorage.getItem("animals");
    if(storedAnimals) {
        console.log("animals from localStorage", storedAnimals);
        return JSON.parse(storedAnimals) as IAnimal[];
    } else {
        const response= await fetch("https://animals.azurewebsites.net/api/animals");
        const result: IAnimalsResponse = await response.json();
        console.log("djur från api:", result);

        const animals = result.animals;
        localStorage.setItem("animals", JSON.stringify(animals));

        return animals;
    }
};

export const animalLoader = async ({ params }: IAnimalLoader): Promise<IAnimalExt | undefined> => {
    const storedAnimals = localStorage.getItem("animals");
    if(storedAnimals) {
        const animals = JSON.parse(storedAnimals) as IAnimalExt[];

        const animalId = params.id ? parseInt(params.id, 10) : undefined;

        if(animalId !== undefined) {
            const animalFromStorage = animals.find(a => a.id === animalId);

            if(animalFromStorage) {
                console.log("djur från localstorage", animalFromStorage);
                
                return animalFromStorage;
            } else {
                console.log("djuret hittades inte i localstorage");
                
            }
        }
    }

    return undefined;
};