import React, { useState } from "react";
import styles from "./styles.module.css"
import { getNames } from "country-list";

const AddCompany = () => {
  const countryNames = getNames();
  const [isExpanded, setIsExpanded] = useState(true);

  const [typeSelectedOption, setTypeSelectedOption] = useState("text");
  const [selectedOption, setSelectedOption] = useState("text");

  //for type select input
  const handleTypeSelectChange = (event) => {
    setTypeSelectedOption(event.target.value);
  };

  //for country select input
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Company Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Category:</label>
              <select
                id="categoryName"
                value={typeSelectedOption}
                onChange={handleTypeSelectChange}
              >
                <option value="category 1">category 1</option>
                <option value="category 2">category 2</option>
                <option value="category 3">category 3</option>
              </select>
            </div>
            <div className="form-col">
              <label className="mandatory-label">Company Name:</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Company Code:</label>
              <input type="text" />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Address Line 1 :</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Address Line 2 :</label>
              <input type="text" />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Country :</label>
              <select
                id="countryName"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select a country</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="countryName">City :</label>
              <select
                id="countryName"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Select</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-col">
              <label htmlFor="currency">Pincode :</label>
              <input type="number" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Company Name on Batch :</label>
              <input type="text" />
            </div>
            <div className="form-col">
              <label htmlFor="currency">ISD Code :</label>
              <input type="number" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <button type="submit" className="btn">Submit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddCompany;
