import './Banner.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
    return (
        <div className="BannerContainer">
            <div className="BannerContainer__banner"></div>
            <p className="BannerContainer__title"><FontAwesomeIcon icon={faLaptopCode} style={{margin:"0 25px"}}/>Projets</p>
            <p className="BannerContainer__desc">Vous pouvez consulter ici la liste de mes projets personnels et professionels publiquement disponibles</p>
        </div>
    )
}