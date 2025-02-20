import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ({ onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("SELECT AN OPTION");
  const options = ["Technical", "Cultural"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelectCategory(option.toLowerCase()); // Pass category name in lowercase for consistency
    setIsOpen(false);
  };

  return (
    <div className="brutalist-container">
      <div className="brutalist-input smooth-type" onClick={toggleDropdown}>
        {selectedOption}
      </div>
      <label className="brutalist-label">Tech or Culture?</label>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="dropdown-item"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
