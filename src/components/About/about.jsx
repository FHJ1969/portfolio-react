import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft, faUser, faAddressCard, faHeart, faChevronDown, faChevronUp, faCode, faDatabase, faTools, faChartBar, faFire} from "@fortawesome/free-solid-svg-icons";
import Modal from './modal'; // Import Modal component
import './about.scss'; // Assume you have about styles defined

function About() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [collapsed, setCollapsed] = useState({
        frontend: true,
        backend: true,
        outils: true,
        methodes: true,
    });

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
        setIsOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsOpen(false); // Close the modal
    };

    const toggleCollapse = (category) => {
        setCollapsed(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    // Competences content with collapsible divs and icons
    const renderCompetencesContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}>Compétences</h2>
            <div className="collapsible">
                <div className="collapsible-header" onClick={() => toggleCollapse('frontend')}>
                    <label>Frontend </label>
                    <FontAwesomeIcon icon={collapsed.frontend ? faChevronDown : faChevronUp} />
                </div>
                {!collapsed.frontend && (
                    <div className="collapsible-content">
                        <div>HTML <FontAwesomeIcon icon={faCode} /></div>
                        <div>CSS <FontAwesomeIcon icon={faCode} /></div>
                        <div>JavaScript <FontAwesomeIcon icon={faCode} /></div>
                        <div>React <FontAwesomeIcon icon={faCode} /></div>
                    </div>
                )}
            </div>

            <div className="collapsible">
                <div className="collapsible-header" onClick={() => toggleCollapse('backend')}>
                    <label>Backend </label>
                    <FontAwesomeIcon icon={collapsed.backend ? faChevronDown : faChevronUp} />
                </div>
                {!collapsed.backend && (
                    <div className="collapsible-content">
                        <div>Node.js <FontAwesomeIcon icon={faDatabase} /></div>
                        <div>Express <FontAwesomeIcon icon={faDatabase} /></div>
                        <div>MongoDB <FontAwesomeIcon icon={faDatabase} /></div>
                    </div>
                )}
            </div>

            <div className="collapsible">
                <div className="collapsible-header" onClick={() => toggleCollapse('outils')}>
                    <label>Outils </label>
                    <FontAwesomeIcon icon={collapsed.outils ? faChevronDown : faChevronUp} />
                </div>
                {!collapsed.outils && (
                    <div className="collapsible-content">
                        <div>Git <FontAwesomeIcon icon={faTools} /></div>
                        <div>VSCode <FontAwesomeIcon icon={faTools} /></div>
                        <div>Webstorm <FontAwesomeIcon icon={faTools} /></div>
                    </div>
                )}
            </div>

            <div className="collapsible">
                <div className="collapsible-header" onClick={() => toggleCollapse('methodes')}>
                    <label>Méthodes </label>
                    <FontAwesomeIcon icon={collapsed.methodes ? faChevronDown : faChevronUp} />
                </div>
                {!collapsed.methodes && (
                    <div className="collapsible-content">
                        <div>Agile <FontAwesomeIcon icon={faChartBar} /></div>
                        <div>Scrum <FontAwesomeIcon icon={faChartBar} /></div>
                        <div>Cascade <FontAwesomeIcon icon={faChartBar} /></div>
                        <div>POO <FontAwesomeIcon icon={faChartBar} /></div>
                    </div>
                )}
            </div>
        </div>
    );

    // CV content with link
    const renderCVContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}>Mon CV</h2>
            <p>Cliquez ici pour voir mon CV:</p>
            <a href="/path/to/cv" target="_blank" rel="noopener noreferrer">Voir CV</a>
        </div>
    );

    // Hobbies content with a list
    const renderHobbiesContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}><FontAwesomeIcon icon={faFire} style={{marginRight:"10px"}}/>Hobbies</h2>
            <ul style={{marginLeft:"20px"}}>
                <li>Design</li>
                <li>Technologies</li>
                <li>Philosophie</li>
                <li>Sport</li>
            </ul>
        </div>
    );

    // Moi content with a paragraph
    const renderMoiContent = () => (
        <div>
            <h2 style={{marginBottom:"20px"}}>À propos de moi</h2>
            <p>
                Lorem ipsum
            </p>
        </div>
    );

    return (
        <>
            <div className="aboutContainer">
                <div className="aboutContainer__CTA">
                    <p className="aboutContainer__CTA--title2">Ici, c'est la section</p>
                    <p className="aboutContainer__CTA--title1" data-aos="zoom-in">A PROPOS</p>
                    <p className="aboutContainer__CTA--title3">
                        C'est ici que vous apprendrez à me connaître plus en détail
                    </p>
                    <a className="aboutContainer__CTA--link" data-aos="fade-right">Entrer en contact <FontAwesomeIcon style={{ marginLeft: "8px" }} icon={faArrowRightArrowLeft} /></a>
                </div>

                <div className="aboutContainer__boxes">
                    <div className="aboutContainer__boxes--big aboutCard" data-aos="zoom-out-left" onClick={() => handleCardClick('competences')}>
                        <div className="aboutContainer__boxes--card-footer">
                            <p className="aboutContainer__boxes--card-text">Compétences</p>
                            <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faArrowRightArrowLeft} />
                        </div>
                    </div>

                    <div className="aboutContainer__boxes--medium aboutCard" data-aos="fade-down" onClick={() => handleCardClick('moi')}>
                        <div className="aboutContainer__boxes--card-footer">
                            <p className="aboutContainer__boxes--card-text">Moi</p>
                            <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faUser} />
                        </div>
                    </div>

                    <div className="aboutContainer__boxes--small">
                        <div className="aboutContainer__boxes--small1 aboutCard" data-aos="fade-right" onClick={() => handleCardClick('hobbies')}>
                            <div className="aboutContainer__boxes--card-footer">
                                <p className="aboutContainer__boxes--card-text">Hobbies</p>
                                <FontAwesomeIcon className="aboutContainer__boxes--card-icon" icon={faHeart} />
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

            {/* Modal Component */}
            <Modal isOpen={isOpen} onClose={handleCloseModal} content={modalContent} />
        </>
    );
}

export default About;