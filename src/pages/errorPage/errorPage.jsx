import './errorPage.scss'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

function Error(){
    return(
    <>
        <div className="errorPage">
            <p className="errorPage__title">Error 404</p>
            <p className="errorPage__desc"><FontAwesomeIcon className="errorPage__icon" icon={faTriangleExclamation}/>
                Cette page n'existe pas !
                <FontAwesomeIcon className="errorPage__icon" icon={faTriangleExclamation}/></p>
            <NavLink to="/" className="errorPage__link">Retour à l'acceuil</NavLink>
        </div>
    </>
    )
}

export default Error