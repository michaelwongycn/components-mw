import React, { useState } from "react";
import InputForm from "../../components/Input/Form/form";
import "bootstrap/dist/css/bootstrap.min.css";

const FormDemo = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (formData) => {
    setSubmittedData(formData);
  };

  const fields = [
    { parameter: "Name", type: "text", placeholder: "Enter your name" },
    { parameter: "Email", type: "email", placeholder: "Enter your email" },
    {
      parameter: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Form Demo</h3>
        </div>
        <div className="card-body">
          <InputForm fields={fields} onSubmit={handleSubmit} />
        </div>
      </div>
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

export default FormDemo;
