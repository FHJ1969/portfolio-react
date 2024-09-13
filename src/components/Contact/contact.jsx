import './contact.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightArrowLeft} from "@fortawesome/free-solid-svg-icons";

function Contact(){
    return(
        <>
            <div className="contactContainer">
                <div className="contactContainer__CTA">
                    <p className="contactContainer__CTA--title2">Et enfin pour me</p>
                    <p className="contactContainer__CTA--title1" data-aos="zoom-in">CONTACTER</p>
                    <p className="contactContainer__CTA--title3">
                        Vous pouvez le faire à l’aide de ce formulaire ou en m’envoyant un message sur LinkedIn :)
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact