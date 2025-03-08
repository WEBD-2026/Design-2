import React, { useState, useEffect , useRef } from "react";
import "./dropdown.css";

const Dropdown = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const [selectedOption, setSelectedOption] = useState("SELECT AN OPTION");
  const [displayText, setDisplayText] = useState("SELECT AN OPTION");
  const options = ["Technical", "Cultural"];

  useEffect(() => {
    if (selectedCategory) {
      setDisplayText(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)); // Capitalize first letter
    } else {
      setDisplayText("Select a Category");
    }
  }, [selectedCategory]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    // setSelectedOption(option);
    setSelectedCategory(option.toLowerCase());
    sessionStorage.setItem("selectedCategory", option.toLowerCase()); // Pass category name in lowercase for consistency
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="brutalist-container">
      <div className="brutalist-input smooth-type" onClick={toggleDropdown}>
      {displayText}
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
