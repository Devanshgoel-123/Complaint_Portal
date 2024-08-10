import React from "react";
import "./ComplaintForm.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import axios from "axios";

const ComplaintForm = () => {
  const options = [
    { value: "Carpenter", label: "Carpenter" },
    { value: "plumber", label: "Plumber" },
    { value: "cleaner", label: "Cleaner" },
  ];

  const submitHandler = () => {
    axios
      .post("http://localhost:3000/complaint/", {
        category: "carpenter",
        subCategory: "furniture",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="complaint-form">
      <section className="form-section">
        <h2 className="form-title">Submit a Complaint</h2>
        <div className="form-grid">
          <CustomSelect
            options={options}
            defaultValue=""
            label="Select Service"
          />
          <CustomSelect
            options={options}
            defaultValue=""
            label="Sub-Category"
          />
          <CustomSelect options={options} defaultValue="" label="Hostel" />
          <div className="form-group">
            <label htmlFor="room-number" className="form-label">
              Room Number
            </label>
            <input id="room-number" placeholder="" className="form-input" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe the issue"
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-button" onClick={submitHandler}>
            Submit Complaint
          </button>
        </div>
      </section>
    </div>
  );
};

export default ComplaintForm;
