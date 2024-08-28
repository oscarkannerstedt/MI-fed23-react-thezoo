import { useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../models/IAnimalExt";

export const Animal = () => {
    const animal = useLoaderData() as IAnimalExt;

    return <section className="animal">
        <h2>{animal?.name}</h2>
        <h4>{animal?.latinName}</h4>
        <img src={animal?.imageUrl} alt={animal?.name} height={100} width={100} />
        <p>{animal?.longDescription}</p>
        <p>Födelseår: {animal?.yearOfBirth}</p>
        <p>Mediciner: {animal?.medicine}</p>
        <p>Du matade djuret senast: {animal?.lastFed}</p>
    </section>
};