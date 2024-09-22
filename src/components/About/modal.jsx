import React from 'react';
import './modal.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquareXmark} from "@fortawesome/free-solid-svg-icons"; // Assume you have modal styles defined

function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div data-aos="zoom-in" className="modal-content">
                <button className="modal-close" onClick={onClose}><FontAwesomeIcon icon={faSquareXmark} /></button>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;