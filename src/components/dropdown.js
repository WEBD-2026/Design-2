import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('SELECT AN OPTION');
    const options = ['Technical', 'Cultural'];

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="brutalist-container">
            <div className="brutalist-input smooth-type" onClick={toggleDropdown}>
                {selectedOption}
            </div>
            <label className="brutalist-label">Innovate or Celebrate ? You Decide!</label>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleSelect(option)} className="dropdown-item">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
