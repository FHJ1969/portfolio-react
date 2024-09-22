import './landing.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faListCheck } from '@fortawesome/free-solid-svg-icons';

function Landing(){
    return(
        <>
            <div className="landingContainer">
                <div className="landingContainer__CTA">
                    <p className="landingContainer__CTA--title2">Salut, moi c'est</p>
                    <p className="landingContainer__CTA--title1" data-aos="zoom-in">NASSIM</p>
                    <p className="landingContainer__CTA--title3">
                        Développeur d’application web basé à Montpellier,
                        passioné par la création d’expériences robustes et uniques
                    </p>
                    <p className="landingContainer__CTA--title4">et un tas d’autres choses</p>
                    <a className="landingContainer__CTA--link" data-aos="fade-right">Entrer en contact <FontAwesomeIcon style={{marginLeft: "8px"}} icon={faArrowRightArrowLeft}/></a>
                </div>

                <div className="landingContainer__works">
                    <a className="landingContainer__works--link" data-aos="fade-left">Voir mes travaux <FontAwesomeIcon style={{marginLeft: "8px"}} icon={faListCheck}/></a>
                </div>
            </div>
        </>
    )
}

export default Landing