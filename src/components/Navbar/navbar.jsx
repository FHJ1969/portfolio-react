import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '/src/assets/logoN.svg'
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__top">
                <NavLink to="/#landing" className="Navbar__link">ACCEUIL</NavLink>
                <NavLink to="/#about" className="Navbar__link">A PROPOS</NavLink>
                <NavLink to="/projects" className="Navbar__link">PROJETS</NavLink>
                <NavLink to="/#contact" className="Navbar__link">CONTACT</NavLink>
            </div>

            <div className="Navbar__bottom">
                <a href="https://www.linkedin.com/in/nassim-achfigat-409151307" target="_blank" className="Navbar__link Navbar__link--icon"><FontAwesomeIcon icon={faLinkedin}/></a>
                <NavLink to="/#landing" href="#landing" className="Navbar__link Navbar__link--icon"><img className="logo_nassim" alt="Logo" src={Logo}/></NavLink>
            </div>
        </div>
    );
}
