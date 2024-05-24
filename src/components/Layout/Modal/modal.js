import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    if (e.target.tagName !== "INPUT") {
      e.stopPropagation();
    }
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={handleModalClick}
      >
        <div className="modal-content">
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
          )}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
