import React from 'react';
import './modal.scss'; // Assume you have modal styles defined
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div data-aos="zoom-in" className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><FontAwesomeIcon icon={faSquareXmark} /></button>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;
