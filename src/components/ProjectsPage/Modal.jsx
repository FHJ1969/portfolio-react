import React from 'react';
import './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faSass,
    faNodeJs,
    faGithub,
    faJs,
    faHtml5,
    faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faSquarePollVertical,
    faBugSlash,
    faXmark,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

// Mapping of icon names to FontAwesome icon objects
const iconMap = {
    faReact,
    faSass,
    faNodeJs,
    faDatabase,
    faSquarePollVertical,
    faBugSlash,
    faGlobe,
    faGithub,
    faJs,
    faHtml5,
    faCss3Alt,
};

const Modal = ({ project, onClose }) => {
    return (
        <div className="Modal__overlay" onClick={onClose}>
            <div className="Modal__content" data-aos="zoom-in" onClick={(e) => e.stopPropagation()}>
                <img src={project.cover} className="Modal__banner"></img>
                <h2><FontAwesomeIcon icon={faGlobe}/> {project.title}</h2>
                <p className="Modal__content--sectionTitle">Mission :</p>
                <p>{project.description}</p>
                <p className="Modal__content--sectionTitle">Description :</p>
                <p>{project.text}</p>
                <p className="Modal__content--sectionTitle">Problème(s) recontré(s) :</p>
                <p>{project.problem}</p>
                <p className="Modal__content--sectionTitle">Stack du projet :</p>
                <div className="Modal__icons">
                    {project.icons.map((iconName, idx) => (
                        <FontAwesomeIcon key={idx} icon={iconMap[iconName]}/>
                    ))}
                </div>
                <a href={project.github} rel="noreferrer" target="_blank" className="Modal__github"><FontAwesomeIcon icon={faGithub} style={{marginRight: '10px',fontSize: '20px'}}/>
                    Repo GitHub</a>
                <FontAwesomeIcon icon={faXmark} onClick={onClose} className="Modal__close-icon"/>
            </div>
        </div>
    );
};

export default Modal;