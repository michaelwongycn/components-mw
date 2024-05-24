import React, { useState } from "react";

const InputForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, parameter) => {
    setFormData((prevState) => ({
      ...prevState,
      [parameter.toLowerCase()]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {fields.map(({ parameter, type, placeholder }, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={parameter} className="form-label">
              {parameter}:
            </label>
            <input
              type={type}
              className="form-control"
              id={parameter}
              placeholder={placeholder}
              value={formData[parameter.toLowerCase()] || ""}
              onChange={(e) => handleChange(e, parameter)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
