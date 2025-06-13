import React from "react";

const Modal = ({ onClose, children }) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <button className="close-btn" onClick={onClose} aria-label="Close">
        &times;
      </button>
      <div className="modal-body">{children}</div>
    </div>
  </div>
);

export default Modal;
