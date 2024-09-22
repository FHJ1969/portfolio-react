import React from 'react';
import './modal.scss'; // Assume you have modal styles defined

function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Modal;