import './Banner.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Background from "../Background/background.jsx";

export default function Banner() {
    return (
        <div className="BannerContainer">
            <div className="BannerContainer__banner"><Background/></div>
            <div className="BannerContainer__div">
                <p data-aos="fade-right" className="BannerContainer__title"><FontAwesomeIcon icon={faLaptopCode}
                                                                                             style={{margin: "0 25px"}}/>Projets
                </p>
                <p data-aos="fade-left" className="BannerContainer__desc">Vous pouvez consulter ici la liste de mes
                    projets personnels ainsi que professionels publiquement disponibles, en sélectionnant un des projet disponible ci-dessous, une modale spécifiant la mission, la description, la stack du projet ainsi que des liens annexes sera disponible.</p>
                <a data-aos="fade-right" href="https://github.com/FHJ1969" rel="noreferrer" target="_blank" className="GithubLink">
                    <FontAwesomeIcon icon={faGithub} style={{marginRight: "5px"}}/>Profil Github</a>
            </div>
        </div>
    )
}