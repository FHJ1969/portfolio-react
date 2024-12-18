import './contact.scss'

function Contact() {
    return (
        <>
            <div id="contact" className="contactContainer">
                <div className="contactContainer__CTA">
                    <p className="contactContainer__CTA--title2">Et enfin, ma section</p>
                    <p className="contactContainer__CTA--title1" data-aos="zoom-in">CONTACT</p>
                    <p className="contactContainer__CTA--title3">
                        Vous pouvez ici me contacter en complétant et en m'envoyant le formulaire fourni sur votre droite :)
                    </p>
                </div>

                <div className="contactContainer__formContainer" data-aos="zoom-out-left">
                    <p className="contactContainer__formContainer--title">Formulaire de contact</p>
                    <p className="contactContainer__formContainer--underTitle">les champs indiqués d'une astérisque
                        sont nécéssaires à remplir.</p>
                    <p className="msgError">Le formulaire est actuellement indisponible,
                        cependant je reste joignable par mail à l'adresse: achnassim34@gmail.com</p>

                    <label htmlFor="email" className="contactContainer__formContainer--label">E-mail
                        <p className="contactContainer__formContainer--label-star">*</p></label>
                    <input placeholder="Veuillez renseigner ici votre adresse e-mail..." name="email" type="email"/>

                    <label htmlFor="tel" className="contactContainer__formContainer--label">N° de téléphone</label>
                    <input placeholder="Veuillez renseigner ici votre n° de tel..." type="tel" name="tel"/>

                    <label htmlFor="textarea" className="contactContainer__formContainer--label">Message
                        <p className="contactContainer__formContainer--label-star">*</p></label>
                    <textarea placeholder="Veuillez renseigner ici votre message..." name="textarea"></textarea>

                    <button className="contactContainer__CTA--link">Envoyer</button>
                </div>
            </div>
        </>
    )
}

export default Contact
