import { NavLink, Outlet } from "react-router-dom";
import "../styles/header.css";
import "../styles/footer.css";

export const Layout = () => {
    return <>
        <header>
            <h1>Zoo</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Hem</NavLink></li>
                    <li><NavLink to={"/animals"}>Djuren</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <div className="footer-content">
                <p>Kontakta oss: info@zoo.com | Telefon: 123-456 789</p>
                <p>&copy; 2024 Zoo.</p>
            </div>
        </footer>
    </>
};