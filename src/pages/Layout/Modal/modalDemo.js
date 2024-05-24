import React, { useState } from "react";
import Modal from "../../components/Layout/Modal/modal";
import InputForm from "../../components/Input/Form/form";

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    setSubmittedData(formData);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mt-5">
      <h2>Modal Demo</h2>
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} title="Login Form">
        <div onClick={(e) => e.stopPropagation()}>
          <InputForm
            fields={[
              {
                parameter: "Username",
                type: "text",
                placeholder: "Enter your username",
              },
              {
                parameter: "Password",
                type: "password",
                placeholder: "Enter your password",
              },
            ]}
            onSubmit={handleSubmit}
          />
        </div>
      </Modal>
      {submittedData && (
        <div className="card mt-4">
          <div className="card-header">
            <h3 className="card-title">Submitted Data</h3>
          </div>
          <div className="card-body">
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDemo;
