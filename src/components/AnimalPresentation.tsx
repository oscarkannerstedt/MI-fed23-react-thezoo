import { IAnimalExt } from "../models/IAnimalExt";
import { formatDate } from "../utils/dateUtils";
import "../styles/animalPresentation.css";

interface IAnimalPresentationProps {
    animal: IAnimalExt;
    feedAnimal: () => void;
    isFeedable: boolean;
  }

  export const AnimalPresentation = ({ animal, feedAnimal, isFeedable }: IAnimalPresentationProps) => {
    return <section className="animal">
        <h2>{animal?.name}</h2>
        <h4>{animal?.latinName}</h4>
        <img src={animal?.imageUrl} alt={animal?.name} />
        <p>{animal?.longDescription}</p>
        <p>Födelseår: {animal?.yearOfBirth}</p>
        <p>Mediciner: {animal?.medicine}</p>
        <p>Du matade djuret senast: {formatDate(animal.lastFed)}</p>
        <button onClick={feedAnimal} disabled={!isFeedable}>Mata djuret</button>
    </section>
  }