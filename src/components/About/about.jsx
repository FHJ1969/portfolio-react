import './about.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightArrowLeft} from "@fortawesome/free-solid-svg-icons";

function About(){
    return(
        <>
            <div className="aboutContainer">
                <div className="aboutContainer__CTA">
                    <p className="aboutContainer__CTA--title2">Ici, c'est la section</p>
                    <p className="aboutContainer__CTA--title1" data-aos="zoom-in">A PROPOS</p>
                    <p className="aboutContainer__CTA--title3">
                        C'est ici que vous apprendrez à me connaître plus en détail
                    </p>
                    <a className="aboutContainer__CTA--link" data-aos="fade-right">Entrer en contact <FontAwesomeIcon style={{marginLeft: "8px"}} icon={faArrowRightArrowLeft}/></a>
                </div>
            </div>
        </>
    )
}

export default About