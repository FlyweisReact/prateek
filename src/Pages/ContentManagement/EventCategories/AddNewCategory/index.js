import React, { useState } from "react";
import styles from "./styles.module.css"

const AddNewCategory = () => {
  const [isExpanded, setIsExpanded] = useState(true);


  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Event Categories Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            
            <div className="form-col">
              <label className="mandatory-label">Event Category Name :</label>
              <input type="text" />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Show In Order :</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
          <div className="form-col checkbox-style">
              <label htmlFor="checkbox">Is Published:</label>
              <input type="checkbox" id="checkbox" name="checkbox" style={{height: "14px"}}/>
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

export default AddNewCategory;
