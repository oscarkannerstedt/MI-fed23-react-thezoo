import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal"
import "../styles/animalsPresentation.css";

interface IAnimalsPresentationProps {
    animals: IAnimal[];
}

export const AnimalsPresentation = ({animals}: IAnimalsPresentationProps) => {
    return <section className="animals">
        {animals.map(animal => <div key={animal.id} className="animal-card">
            <h2>{animal.name}</h2>
            <p>{animal.shortDescription}</p>
            <img src={animal.imageUrl} alt={animal.name} width={100} height={100} />
            <div><Link to={`/animal/${animal.id}`}> Läs mer</Link></div>
        </div>
    )}
    </section>
}