import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import { AnimalsPresentation } from "../components/AnimalsPresentation";

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    const [fetched, setFeched] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const response= await fetch("https://animals.azurewebsites.net/api/animals");
                const result: IAnimalsResponse = await response.json();
                console.log(result);
                

                setAnimals(result);
            } catch (error) {
                console.log(error);
            } finally {
                setFeched(true);
            }
        }

        if(!fetched) getData();
    })

    return <>
        <AnimalsPresentation animals={animals}></AnimalsPresentation>
    </>
};