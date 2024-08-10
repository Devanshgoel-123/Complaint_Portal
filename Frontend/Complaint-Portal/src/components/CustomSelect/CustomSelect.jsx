import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./CustomSelect.css";

const CustomSelect = ({ options = [], defaultValue = "", label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const containerRef = useRef(null);

  const handleSelectClick = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="custom-select-container">
      {label && <label className="custom-select-label">{label}</label>}
      <div className="custom-select" ref={containerRef}>
        <div
          className={`select-selected ${isOpen ? "select-arrow-active" : ""}`}
          onClick={handleSelectClick}
        >
          {selectedValue}
        </div>
        {isOpen && (
          <div className="select-items">
            {options.map((option) => (
              <div
                key={option.value}
                className={
                  selectedValue === option.label ? "same-as-selected" : ""
                }
                onClick={() => handleOptionClick(option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  defaultValue: PropTypes.string,
  label: PropTypes.string,
};

export default CustomSelect;
