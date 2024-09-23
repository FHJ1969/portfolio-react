import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '/src/assets/logoN.svg'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__top">
                <a href="#" className="Navbar__link">A PROPOS</a>
                <a href="#" className="Navbar__link">PROJETS</a>
                <a href="#" className="Navbar__link">CONTACT</a>
            </div>

            <div className="Navbar__bottom">
                <a href="#" className="Navbar__link Navbar__link--icon"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="#" className="Navbar__link Navbar__link--icon"><img alt="Logo" style={{width:"43px",marginLeft:"-6px"}} src={Logo}/></a>
            </div>
        </div>
    );
}

export default Navbar;
