import { Link } from "react-router-dom";
import "../Nav/Nav.css"

export default function Nav () {
    return (
        <nav className="navHeader ">
            <Link to="/" className="link-accueil link main-color">
                Accueil
            </Link>
            <Link to="/about" className="link-about link main-color">
                A Propos
            </Link>
        </nav>
    )
}