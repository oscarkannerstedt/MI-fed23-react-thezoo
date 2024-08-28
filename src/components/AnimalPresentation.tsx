import { IAnimalExt } from "../models/IAnimalExt";
import { formatDate } from "../utils/dateUtils";

interface IAnimalPresentationProps {
    animal: IAnimalExt;
    feedAnimal: () => void;
    isFed: boolean;
  }

  export const AnimalPresentation = ({ animal, feedAnimal, isFed }: IAnimalPresentationProps) => {
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
  }