import logo from "../../assets/LOGO.png";
import Nav from "../Nav/Nav"
import "../Header/Header.css"

export default function Header () {
    return (
        <header className="globalHeader">
            <img className="logo" src={logo} alt="logo kasa" />
            <Nav className="navHeader"/>
        </header>
        
    )
}