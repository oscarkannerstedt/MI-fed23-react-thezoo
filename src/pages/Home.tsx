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

            {/* <section className="introduction">
                <h2>Om Vårt Zoo</h2>
                <p>På vårt zoo kan du utforska och lära dig mer om djur från alla världens hörn. Vi erbjuder
                en unik upplevelse där du kan komma nära naturen och upptäcka en mängd olika arter, deras
                livsmiljöer och beteenden. Vårt mål är att främja bevarandet av hotade arter och utbilda
                våra besökare om djur och miljö.
                </p>
            </section> */}
        </div>
    );
};