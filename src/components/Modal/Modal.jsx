import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, children }) {
    useEffect(() => {
        const handleKeydown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', e => {
            handleKeydown(e);
        });
        return () => {
            window.removeEventListener('keydown', e => {
                handleKeydown(e);
            });
        };
    }, [onClose]);

    const handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <div className="Overlay" onClick={handleBackDropClick}>
            <div className="Modal">{children}</div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
