import React, { useState } from "react";
import styles from "./styles.module.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { getNames } from "country-list";
import { useTable, usePagination } from "react-table";


const Profile = () => {
  const countryNames = getNames();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTableExpanded, setIsTableExpanded] = useState(true);
 
  
  const addSponsorHandler = () => {
    console.log("add btn")
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  const toggleTableExpand = () => {
    setIsTableExpanded(!isTableExpanded);
  };

  return (
    <>
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">User Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Used Id :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">User Name :</label>
              <input type="text" required disabled/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Email :</label>
              <input type="text" required disabled/>
            </div>
            <div className="form-col">
              <label>Mobile No :</label>
              <input type="number" />
            </div>
          </div>
          <div className="form-row">
          <div className="form-col">
              <label>Address Line 1 :</label>
              <input type="text" />
            </div>
            <div className="form-col">
              <label>Address Line 2 :</label>
              <input type="text"/>
            </div>
          </div>

          <div className="form-row">
          <div className="form-col">
          <div className="form-col">
              <label>Select Files :</label>
              <input type="file" />
            </div>
            </div>

          </div>     
   
          
          <div className="form-row">
            <div className="form-col">
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          </div>
        </form>
      )}
      
    </div>


    <div className={`yourComponent ${isTableExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Change Password</div>
        <button className="expandButton" onClick={toggleTableExpand}>
          {isTableExpanded ? "-" : "+"}
        </button>
      </div>
      {isTableExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Old Password :</label>
              <input type="password" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">New Password :</label>
              <input type="password" required />
            </div>
           
          </div>
          <div className="form-row">
          <div className="form-col">
              <label className="mandatory-label">Confirm Password :</label>
              <input type="password" required />
            </div>
            
          </div>          
          <div className="form-row">
            <div className="form-col">
              <button type="submit" className="btn">
                Save
              </button>
            </div>
          </div>
        </form>
      )}
      
    </div>
    </>
  );
};

export default Profile;
