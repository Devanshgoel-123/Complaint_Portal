import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./CustomSelect.css";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options?: Option[];
  defaultValue?: string;
  label?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options = [],
  defaultValue = "",
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSelectClick = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
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
          {selectedValue || "Select an option"}
        </div>
        {isOpen && (
          <div className="select-items">
            {options.map((option) => (
              <div
                key={option.value}
                className={`select-item ${
                  selectedValue === option.label ? "same-as-selected" : ""
                }`}
                onClick={() => handleOptionClick(option.label)}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  className="tick"
                  style={{
                    visibility:
                      selectedValue === option.label ? "visible" : "hidden",
                  }}
                />
                <span className="option-text">{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
