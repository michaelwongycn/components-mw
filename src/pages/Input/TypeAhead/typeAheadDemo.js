import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TypeAhead from "../../components/Input/TypeAhead/typeAhead";

const TypeAheadDemo = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Apple", "Banana", "Orange", "Pineapple", "Grapes"];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Typeahead/Autocomplete Demo</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Selected Option: {selectedOption}</h5>
          <TypeAhead options={options} onSelect={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default TypeAheadDemo;
