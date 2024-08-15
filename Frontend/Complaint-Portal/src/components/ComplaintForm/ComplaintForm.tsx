import React, { FormEvent } from "react";
import "./ComplaintForm.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import axios from "axios";

interface Option {
  value: string;
  label: string;
}

const ComplaintForm: React.FC = () => {
  const options: Option[] = [
    { value: "carpenter", label: "Carpenter" },
    { value: "plumber", label: "Plumber" },
    { value: "cleaner", label: "Cleaner" },
  ];

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/complaint/registerComplaint", {
        category: "carpenter",
        subCategory: "Furniture",
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="complaint-form">
      <section className="form-section">
        <h2 className="form-title">Submit a Complaint</h2>
        <form onSubmit={submitHandler} className="form-grid">
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
          <div className="form-group description">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Describe the issue"
              className="form-textarea"
            />
          </div>
        </form>
        <button type="submit" className="form-button">
          Submit Complaint
        </button>
      </section>
    </div>
  );
};

export default ComplaintForm;
