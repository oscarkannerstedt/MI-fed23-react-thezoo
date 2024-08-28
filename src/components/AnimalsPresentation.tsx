import { Link } from "react-router-dom";
import "../styles/animalsPresentation.css";
import { isTimeToFeed } from "../utils/dateUtils";
import { IAnimalExt } from "../models/IAnimalExt";

interface IAnimalsPresentationProps {
    animals: IAnimalExt[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
    return (
      <section className="animals">
        {animals.map((animal) => {
          const needsImmediateFeeding = isTimeToFeed(animal.lastFed, 4);
          const isRecentlyFed = !needsImmediateFeeding && isTimeToFeed(animal.lastFed, 3);
  
          return (
            <div key={animal.id} className="animal-card">
              <h2>{animal.name}</h2>
              <p>{animal.shortDescription}</p>
              <img src={animal.imageUrl} alt={animal.name} />
              <p>
                {needsImmediateFeeding
                    ? "Djuret måste matas omgående!" //Om det gått 4+ timmar
                    : isRecentlyFed 
                    ? "Djuret kan matas." //Om det gått mellan 3-4 timmar
                    : "Djuret behöver inte matas ännu."}
              </p>
              <div>
                <Link to={`/animal/${animal.id}`}>Läs mer</Link>
              </div>
            </div>
          );
        })}
      </section>
    );
  };