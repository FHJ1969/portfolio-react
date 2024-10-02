import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightArrowLeft,
    faUser,
    faAddressCard,
    faBook,
    faCode,
    faDatabase,
    faTools,
    faChartBar,
    faCircleUser,
    faHammer,
    faNewspaper,
    faSwatchbook, faChartSimple
} from "@fortawesome/free-solid-svg-icons";
import Modal from './modal';
import './about.scss';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // Function to handle card click
    const handleCardClick = (cardType) => {
        switch(cardType) {
            case 'competences':
                setModalContent(renderCompetencesContent());
                break;
            case 'cv':
                setModalContent(renderCVContent());
                break;
            case 'hobbies':
                setModalContent(renderHobbiesContent());
                break;
            case 'moi':
                setModalContent(renderMoiContent());
                break;
            default:
                setModalContent(null);
        }
        setIsOpen(true); // Open the modal when modalContent is set
    };

    const handleCloseModal = () => {
        setIsOpen(false); // Close the modal
    };

    // Competences content with icons and titles
    const renderCompetencesContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}><FontAwesomeIcon icon={faHammer} style={{marginRight:"10px"}}/>Compétences</h2>
            <div>
                <div><FontAwesomeIcon icon={faCode} style={{marginRight: "10px"}}/>Frontend :<br/> HTML, CSS,
                    JavaScript, React, Sass, Scss<br/><br/></div>
                <div><FontAwesomeIcon icon={faDatabase} style={{marginRight: "10px"}}/>Backend :<br/> Node.js, Express,
                    MongoDB, RESTful APIs, noSQL<br/><br/>
                </div>
                <div><FontAwesomeIcon icon={faTools} style={{marginRight: "10px"}}/>Outils :<br/> Git, Github, Postman, VSCode,
                    Webstorm, Figma, Canva, Slack, Notion, Trello, Microsoft 365, Linux (Debian)<br/><br/>
                </div>
                <div><FontAwesomeIcon icon={faChartBar} style={{marginRight: "10px"}}/>Méthodes :<br/> Agile, Scrum,
                    Cascade, POO<br/><br/>
                </div>
                <div><FontAwesomeIcon icon={faChartSimple} style={{marginRight: "10px"}} />Marketing digital :<br /> SEO, Google Search Console,
                     Google Analytics, Google Rich Snippets, Google Ads, Facebook Ads, Lighouse, Wave

                </div>
            </div>
        </div>
    );

    const renderCVContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}><FontAwesomeIcon icon={faNewspaper} style={{marginRight:"10px"}}/>Mon CV</h2>
            <p>Cliquez ici pour voir mon CV:</p>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:eu:f6817c6f-26b3-410a-8842-5bc824db9090?viewer!megaVerb=group-discover" target="_blank" rel="noopener noreferrer">Voir CV</a>
        </div>
    );

    const renderHobbiesContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}><FontAwesomeIcon icon={faBook} style={{marginRight:"10px"}}/>Diplômes et expériences</h2>
            <ul style={{marginLeft: "20px"}}>
                <li>Diplômes</li>
                <p className="ExpTitle">Baccalauréat général (2022)</p>
                <p className="ExpDesc">Lycée Jean Moulin (Pézenas)</p>
                <p className="ExpTitle">Développeur Web (2024)</p>
                <p className="ExpDesc">Openclassrooms - Diplôme Développeur d'applications web</p>
                <li style={{marginTop:"25px"}} >Expériences</li>
                <p className="ExpTitle">Stage d'immersion en entreprise (2024)</p>
                <p className="ExpDesc">NEO (Gigean) - Marketing digital et créations de visuels</p>
            </ul>
        </div>
    );

    const renderMoiContent = () => (
        <div>
            <h2 style={{marginBottom: "20px"}}><FontAwesomeIcon icon={faCircleUser} style={{marginRight:"10px"}}/>À propos de moi</h2>
            <p>
                Programmeur fullstack junior de 19ans,
                avec une solide compréhension des intéractions front-end et back-end.<br/><br/>
                Enthousiaste à l'idée de développer des applications web robustes et esthétiques ainsi que de collaborer en équipe
                afin de mener à bien des projets ambitieux et riches en expériences.<br/><br/>
                Je suis constamment à la recherche de nouvelles compétences et de défis pour améliorer mes
                connaissances et contribuer à des projets engageants.
            </p>
        </div>
    );

    return (
        <>
            <div id="about" className="aboutContainer">
                <div className="aboutContainer__CTA">
                    <p className="aboutContainer__CTA--title2">Ici, c'est la section</p>
                    <p className="aboutContainer__CTA--title1" data-aos="zoom-in">A PROPOS</p>
                    <p className="aboutContainer__CTA--title3">
                        C'est ici que vous apprendrez à me connaître plus en détail
                    </p>
                    <a style={{textDecoration:"none"}} href="#contact" className="aboutContainer__CTA--link" data-aos="fade-right">Entrer en contact <FontAwesomeIcon style={{ marginLeft: "8px" }} icon={faArrowRightArrowLeft} /></a>
                </div>

                <div className="aboutContainer__boxes">
                    <div className="aboutContainer__boxes--big aboutCard" data-aos="zoom-out-left" onClick={() => handleCardClick('competences')}>
                        <div className="aboutContainer__boxes--card-footer">
                            <p className="aboutContainer__boxes--card-text">Compétences</p>
                            <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faSwatchbook} />
                        </div>
                    </div>

                    <div className="aboutContainer__boxes--medium aboutCard" data-aos="fade-down" onClick={() => handleCardClick('moi')}>
                        <div className="aboutContainer__boxes--card-footer">
                            <p className="aboutContainer__boxes--card-text">Moi</p>
                            <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faUser}/>
                        </div>
                    </div>

                    <div className="aboutContainer__boxes--small">
                        <div className="aboutContainer__boxes--small1 aboutCard" data-aos="fade-right" onClick={() => handleCardClick('hobbies')}>
                            <div className="aboutContainer__boxes--card-footer">
                                <p className="aboutContainer__boxes--card-text">Exp</p>
                                <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faBook} />
                            </div>
                        </div>

                        <div className="aboutContainer__boxes--small1 aboutCard" data-aos="fade-up" onClick={() => handleCardClick('cv')}>
                            <div className="aboutContainer__boxes--card-footer">
                                <p className="aboutContainer__boxes--card-text">CV</p>
                                <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faAddressCard} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={handleCloseModal} content={modalContent} />
        </>
    );
}
