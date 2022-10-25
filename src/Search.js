import React from "react";
import "./Weather.css";
import axios from "axios";
const Pin = require("./pin.jpeg");

export default function Search() {
  let city = "Seattle";
  const ApiKey = "393aa3ab02bfb9bf0et3b4b7c32oea88";

  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}`;
  axios.get(ApiUrl).then(displayWeather);

  function displayWeather(response) {
    console.log(response);
  }

  return (
    <div className="Search">
      <form className="change-city">
        <input
          type="search"
          className="city-input"
          autoComplete="off"
          placeholder="Enter a city.."
          onChange
        />

        <button className="change-city-button" type="submit">
          Search
        </button>
        <button className="current-location-button" input type="submit">
          <img
            src={Pin}
            alt="Current Location"
            className="current-location-img"
          />
        </button>
      </form>
    </div>
  );
}
