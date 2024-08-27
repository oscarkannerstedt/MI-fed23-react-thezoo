import { NavLink, Outlet } from "react-router-dom";
import "../styles/header.css";

export const Layout = () => {
    return <>
        <header>
            <h1>Zoo</h1>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Hem</NavLink></li>
                    <li><NavLink to={"/Animals"}>Djuren</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer></footer>
    </>
};