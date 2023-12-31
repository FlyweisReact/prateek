import React, { useRef, useState } from "react";
// import styles from "./styles.module.css";
import "./styles.css";
import { getNames } from "country-list";
import TextEditor from './../../../../Components/TextEditor/index';

const AddAboutOrganization = () => {
  const countryNames = getNames();
  const [isExpanded, setIsExpanded] = useState(true);

  

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  

  const onSave = (text) => {
    console.log(text);
  }


  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">About Organisation</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event Name :</label>
              <select>
                <option value="">--select--</option>
                <option value="category 1">category 1</option>
                <option value="category 2">category 2</option>
                <option value="category 3">category 3</option>
              </select>
            </div>
          </div>

          <TextEditor onSave={onSave} bifurcation={false}/>
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

export default AddAboutOrganization;
