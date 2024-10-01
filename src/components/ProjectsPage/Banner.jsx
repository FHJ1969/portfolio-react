import './Banner.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
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
                    projets personnels et professionels publiquement disponibles</p>
            </div>
        </div>
    )
}