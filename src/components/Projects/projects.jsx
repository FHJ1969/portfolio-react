import './projects.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightArrowLeft} from "@fortawesome/free-solid-svg-icons";

function Projects(){
    return(
        <>
            <div className="projectContainer">
                <div className="projectContainer__CTA">
                    <p className="projectContainer__CTA--title2">Voici la liste de mes</p>
                    <p className="projectContainer__CTA--title1" data-aos="zoom-in">PROJETS</p>
                    <p className="projectContainer__CTA--title3">
                        Déroulés sur votre droite et accessibles entièrement en cliquant sur "En savoir plus"
                    </p>
                    <a className="projectContainer__CTA--link" data-aos="fade-right">Entrer en contact <FontAwesomeIcon
                        style={{marginLeft: "8px"}} icon={faArrowRightArrowLeft}/></a>
                </div>
            </div>
        </>
    )
}

export default Projects