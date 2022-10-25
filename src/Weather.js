import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import bootstrap from "bootstrap";

export default function Weather() {
  const ApiKey = "393aa3ab02bfb9bf0et3b4b7c32oea88";
  let city = "Seattle";
  let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}`;
  axios.get(ApiUrl).then(displayWeather);

  function displayWeather(response) {
    console.log(response);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Weather">
      <div className="container-weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                className="city-input"
                autoComplete="off"
                placeholder="Enter a city.."
                onChange
              />
            </div>
            <div className="col-sm-3">
              <button className="change-city-button" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo />
      </div>
    </div>
  );
}
