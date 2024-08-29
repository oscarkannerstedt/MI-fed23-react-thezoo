import { IAnimalExt } from "../models/IAnimalExt";
import { formatDate, isTimeToFeed } from "../utils/dateUtils";
import "../styles/animalPresentation.css";
import { ImageWithFallback } from "./ImageWithFallback";

interface IAnimalPresentationProps {
    animal: IAnimalExt;
    feedAnimal: () => void;
  }

  export const AnimalPresentation = ({ animal, feedAnimal }: IAnimalPresentationProps) => {
    const needsImmediateFeeding = isTimeToFeed(animal.lastFed, 4);
    const canBeFed = isTimeToFeed(animal.lastFed, 3);
    const isTooSoonToFeed = !canBeFed;

    return ( 
      <section className="animal">
        <h2>{animal?.name}</h2>
        <h4>{animal?.latinName}</h4>
        <ImageWithFallback src={animal?.imageUrl} alt={animal?.name}/>
        <p>{animal?.longDescription}</p>
        <p>Födelseår: {animal?.yearOfBirth}</p>
        <p>Mediciner: {animal?.medicine}</p>
        <p>Du matade djuret senast: {formatDate(animal.lastFed)}</p>
        <p>
          {needsImmediateFeeding
            ? "Djuret måste matas omgående!" //Om det gått 4+ timmar
            : !isTooSoonToFeed
            ? "Djuret kan matas." //Om det gått mellan 3-4 timmar
            : "Djuret behöver inte matas ännu."}
        </p>
        <button onClick={feedAnimal} disabled={isTooSoonToFeed}>Mata djuret</button>
      </section>
    );
  };