import React, { useState } from "react";
import "./styles.css";
import { getNames } from "country-list";
import { State, City } from "country-state-city";

const AddLocation = () => {
  const countryNames = getNames();
  const [isExpanded, setIsExpanded] = useState(true);

  const [typeSelectedOption, setTypeSelectedOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("text");
  const states = State.getStatesOfCountry("IN");
  const [selected, setSelected] = useState({
    state: "",
    city: "",
  });
  const cities = City.getCitiesOfState("IN", selected.state);
  // Use map method to create option elements for states and cities
  const stateOptions = states.map((state) => (
    <option key={state.isoCode} value={state.isoCode}>
      {state.name}
    </option>
  ));

  const cityOptions = cities.map((city) => (
    <option key={city.name} value={city.name}>
      {city.name}
    </option>
  ));

  //for type select input
  const handleTypeSelectChange = (event) => {
    setTypeSelectedOption(event.target.value);
    console.log(event.target.value)
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
        <div className="title">Location Details</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {isExpanded && (
        <form className="form-container">
          <div className="form-row">
            <div className="form-col">
              <label className="mandatory-label">Select Type:</label>
              <select
                id="categoryName"
                value={typeSelectedOption}
                onChange={handleTypeSelectChange}
              >
                <option value="select">--select--</option>
                <option value="city">city</option>
                <option value="country">country</option>
                <option value="state">state</option>
              </select>
            </div>
            <div className="form-col">
              <label className="mandatory-label">Location Name:</label>
              <input type="text" id="currency" />
            </div>
          </div>
          <div className="form-row">
            {( typeSelectedOption === "") && (
            <div className="form-col">
              <label className="mandatory-label">Country/State:</label>
              <select
                id="countryName"
                value={selectedOption}
                onChange={handleSelectChange}
                disabled
              >
                <option value="">Select a country</option>
                {countryNames.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>)}
            {(typeSelectedOption === "country") && (
            <div className="form-col">
              <label className="mandatory-label">Country/State:</label>
              <select
                id="countryName"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">NONE</option>
              </select>
            </div>)}
            {(typeSelectedOption === "state") && (
            <div className="form-col">
              <label className="mandatory-label">Country/State:</label>
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
            </div>)}
            {(typeSelectedOption === "city") && (
            <div className="form-col">
              <label className="mandatory-label">Country/State:</label>
              <select
                name="state"
                id="state"
                className="form-control"
                value={selected.state}
                // onChange={handleChange}
                
              >
                <option value="">State</option>
                {stateOptions}
              </select>
            </div>)}
            {/* <div className="form-col">
              <label className="mandatory-label">Country/State:</label>
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
            </div> */}
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

export default AddLocation;
