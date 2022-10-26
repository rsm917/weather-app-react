import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import bootstrap from "bootstrap";
const Cloudy = require("./icon.jpeg");

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    console.log(response);
    setReady(true);
  }

  if (ready) {
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
          <div className="WeatherInfo">
            <h1 id="location"> {weatherData.city}</h1>
            <ul className="weather-details">
              <li>Sunday 13:00</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>

            <div className="row">
              <div className="col-sm-6">
                <div className="Icon">
                  <img src={Cloudy} alt="Weather Description" id="icon" />
                </div>
                <div className="current-temperature">
                  {" "}
                  {Math.round(weatherData.temperature)} <strong>°C</strong>
                </div>
              </div>
              <div className="col-sm-6">
                <ul className="weather-details">
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const ApiKey = "393aa3ab02bfb9bf0et3b4b7c32oea88";
    let city = "Seattle";
    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}`;
    axios.get(ApiUrl).then(displayWeather);
    return "Loading...";
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
}
