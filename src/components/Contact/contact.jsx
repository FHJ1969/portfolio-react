import './contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <>
            <div className="contactContainer">
                <div className="contactContainer__CTA">
                    <p className="contactContainer__CTA--title2">Et enfin pour me</p>
                    <p className="contactContainer__CTA--title1" data-aos="zoom-in">CONTACTER</p>
                    <p className="contactContainer__CTA--title3">
                        Vous pouvez le faire en complétant et en m'envoyant le formulaire fourni sur votre droite :)
                    </p>
                </div>

                <div className="contactContainer__formContainer" data-aos="zoom-out-left">
                    <p className="contactContainer__formContainer--title">Formulaire de contact</p>
                    <p className="contactContainer__formContainer--underTitle">les champs indiqués d'une astérisque
                        sont nécéssaires à remplir.</p>

                    <label htmlFor="email" className="contactContainer__formContainer--label">E-mail
                        <p className="contactContainer__formContainer--label-star">*</p></label>
                    <input name="email" type="email"/>

                    <label htmlFor="tel" className="contactContainer__formContainer--label">N° de téléphone</label>
                    <input type="tel" name="tel"/>

                    <label htmlFor="textarea" className="contactContainer__formContainer--label">Message
                        <p className="contactContainer__formContainer--label-star">*</p></label>
                    <textarea name="textarea"></textarea>

                    <button className="contactContainer__CTA--link">Envoyer</button>
                </div>
            </div>
        </>
    )
}

export default Contact
