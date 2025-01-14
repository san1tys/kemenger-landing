import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-lg shadow-lg relative w-[90%] max-w-[400px]">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full z-10"
                >
                    <FaTimes />
                </button>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
