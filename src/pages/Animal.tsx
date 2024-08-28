import { useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../models/IAnimalExt";
import { useState } from "react";
import { AnimalPresentation } from "../components/AnimalPresentation";

export const Animal = () => {
    const loadedAnimal = useLoaderData() as IAnimalExt;

    const [animal, setAnimal] = useState<IAnimalExt>(loadedAnimal);
    const [isFed, setIsFed] = useState<boolean>(new Date(animal.lastFed) > new Date());

    const feedAnimal = () => {
        const now = new Date().toISOString();
        setAnimal({...animal, lastFed: now});
        setIsFed(true);

        const storedAnimals = localStorage.getItem("animals");
        if(storedAnimals) {
            const animals = JSON.parse(storedAnimals) as IAnimalExt[];
            const updatedAnimals = animals.map(a =>
                a.id === animal.id ? {...a, lastFed: now} : a
            );

            localStorage.setItem("animals", JSON.stringify(updatedAnimals));
        }
    }

    return <AnimalPresentation animal={animal} feedAnimal={feedAnimal} isFed={isFed}></AnimalPresentation>
};