import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faReact, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faSquarePollVertical, faBugSlash, faGlobe, faArrowRightArrowLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './projects.scss'
import works from '/src/data/works.json';

const iconMap = {
    faGlobe,
    faReact,
    faSass,
    faNodeJs,
    faDatabase,
    faSquarePollVertical,
    faBugSlash
};

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
                    <a className="projectContainer__CTA--link" data-aos="fade-right">Voir tout mes projets <FontAwesomeIcon
                        style={{marginLeft: "8px"}} icon={faArrowRightArrowLeft}/></a>
                </div>

                <div className="projectContainer__cardContainer">
                    {works.map((work, index) => (
                        <div key={index} className="projectCard" data-aos="flip-up">
                            <img src={work.cover} alt={work.title} className="projectCard__image"/>
                            <div className="projectCard__info">
                                <h3 className="projectCard__title">
                                    <FontAwesomeIcon icon={iconMap[work.type]}/> {work.title}
                                </h3>
                                <p className="projectCard__description">{work.description}</p>
                                <div className="projectCard__footer">
                                    <div className="projectCard__icons">
                                        {work.icons.map((icon, iconIndex) => (
                                            <FontAwesomeIcon key={iconIndex} icon={iconMap[icon]}/>
                                        ))}
                                    </div>
                                    <a href="#" className="projectCard__link">En savoir plus &gt;</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Projects