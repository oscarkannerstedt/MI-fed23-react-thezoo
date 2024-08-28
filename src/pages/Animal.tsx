import { useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../models/IAnimalExt";
import { useState } from "react";

export const Animal = () => {
    const loadedAnimal = useLoaderData() as IAnimalExt;

    const [animal, setAnimal] = useState<IAnimalExt>(loadedAnimal);
    const [isFed, setIsFed] = useState<boolean>(new Date(animal.lastFed) > new Date());

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

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

    return <section className="animal">
        <h2>{animal?.name}</h2>
        <h4>{animal?.latinName}</h4>
        <img src={animal?.imageUrl} alt={animal?.name} height={100} width={100} />
        <p>{animal?.longDescription}</p>
        <p>Födelseår: {animal?.yearOfBirth}</p>
        <p>Mediciner: {animal?.medicine}</p>
        <p>Du matade djuret senast: {formatDate(animal.lastFed)}</p>
        <button onClick={feedAnimal} disabled={isFed}>Mata djuret</button>
    </section>
};