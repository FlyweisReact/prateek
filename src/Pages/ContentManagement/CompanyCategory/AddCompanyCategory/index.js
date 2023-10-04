import React, { useState } from "react";
import "./styles.css";

const AddCompanyCategory = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Category Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="categoryName" className="mandatory-label">Category Name:</label>
              <input type="text" id="categoryName" />
            </div>
            <div className="form-col">
              <label htmlFor="currency" className="mandatory-label">Currency:</label>
              <input type="text" id="currency" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="seminarFee" className="mandatory-label">Seminar Fee:</label>
              <input type="text" id="seminarFee" />
            </div>
            <div className="form-col checkbox-style">
              <label htmlFor="checkbox">Is Published:</label>
              <input type="checkbox" id="checkbox" name="checkbox" style={{height: "14px"}}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddCompanyCategory;
