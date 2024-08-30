import { AnimalsPresentation } from "../components/AnimalsPresentation";
import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export const Animals = () => {

    const storedAnimals = localStorage.getItem("animals");
    const animals = storedAnimals ? JSON.parse(storedAnimals) : (useLoaderData() as IAnimal[]);

    return <>
        <AnimalsPresentation animals={animals}></AnimalsPresentation>
    </>
};