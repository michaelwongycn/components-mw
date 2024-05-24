import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TypeAhead = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredOptions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    onSelect(suggestion);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div
        className={"dropdown-menu" + (suggestions.length > 0 ? " show" : "")}
      >
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="dropdown-item"
            type="button"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeAhead;
