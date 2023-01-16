import logo from "../../assets/LOGO-FOOTER.png";
import "../Footer/Footer.css"

export default function Footer () {
    return (
        <footer className="footer-global">
            <img className="footer-img" src={logo} alt="logo kasa" />
            <p className="text-footer">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}