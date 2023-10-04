import React, { useState } from "react";
import styles from "./styles.module.css";

const AddNewEvent = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Event Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event Organizer :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Event Category Name : </label>
              <select required>
                <option value="">--select--</option>
                <option value="category 1">category 1</option>
                <option value="category 2">category 2</option>
                <option value="category 3">category 3</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event Name :</label>
              <input type="text" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Event Description :</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event Country id : </label>
              <select required>
                <option value="">--select--</option>
                <option value="category 1">category 1</option>
                <option value="category 2">category 2</option>
                <option value="category 3">category 3</option>
              </select>
            </div>
            <div className="form-col">
              <label className="mandatory-label">Event City : </label>
              <select required>
                <option value="">--select--</option>
                <option value="category 1">category 1</option>
                <option value="category 2">category 2</option>
                <option value="category 3">category 3</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event Address :</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>

            <div className="form-col">
              <label className="mandatory-label">Event From Date :</label>
              <input type="date" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Event To Date :</label>
              <input type="date" required />
            </div>
            <div className="form-col">
              <label className="mandatory-label">Geo Lat :</label>
              <input type="text" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Geo Long :</label>
              <input type="text" required />
            </div>

            <div className="form-col">
              <label>Mobile App Icon :</label>
              <input type="file" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-col checkbox-style">
              <label htmlFor="checkbox">Is Published:</label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                style={{ height: "14px" }}
              />
            </div>
            <div className="form-col">
              <label>Show In Order :</label>
              <input type="text" required />
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

export default AddNewEvent;
