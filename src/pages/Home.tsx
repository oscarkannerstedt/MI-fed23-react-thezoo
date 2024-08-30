import startImage from "../assets/zoo.webp";
import "../styles/home.css"

export const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <img src={startImage} alt="zoo animals" className="hero-image" />
                <div className="hero-text">
                <h1>Välkommen till Zoo!</h1>
                <p>Upplev en värld fylld av fantastiska djur och hjälp oss att mata dom.</p>
                </div>
            </section>
        </div>
    );
};