import React, { useState } from 'react';
import './ProjectList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBugSlash,
    faDatabase,
    faGlobe,
    faSquarePollVertical
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faSass, faNodeJs, faJs, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import projects from '/src/data/works.json';
import Modal from "./Modal.jsx";

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

const ProjectList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <div className="ProjectList">
            {projects.map((project, index) => (
                <div key={index} className="ProjectList__project" onClick={() => openModal(project)}>
                    <p className="ProjectList__project--title">{project.title}</p>
                    <div className="ProjectList__project--icons">
                        {project.icons.map((iconName, idx) => (
                            <FontAwesomeIcon key={idx} icon={iconMap[iconName]} />
                        ))}
                    </div>
                    {project.github && (
                        <a className="ProjectList__project--link" href={project.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                </div>
            ))}
            {isModalOpen && (
                <Modal project={selectedProject} onClose={closeModal} />
            )}
        </div>
    );
};

export default ProjectList;