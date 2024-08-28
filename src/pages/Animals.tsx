import { AnimalsPresentation } from "../components/AnimalsPresentation";
import { useLoaderData } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

export const Animals = () => {
    const animals = useLoaderData() as IAnimal[];

    return <>
        <AnimalsPresentation animals={animals}></AnimalsPresentation>
    </>
};