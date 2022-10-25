import React from "react";
import axios from "axios";
import bootstrap from "bootstrap";
const Cloudy = require("./icon.jpeg");

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="location"> New Orleans</h1>
      <ul className="weather-details">
        <li>Sunday 13:00</li>
        <li>Partly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-sm-6">
          <div className="Icon">
            <img src={Cloudy} alt="Weather Description" id="icon" />
          </div>
          <div className="current-temperature">
            {" "}
            78 <strong>°F</strong>
          </div>
        </div>
        <div className="col-sm-6">
          <ul className="weather-details">
            <li>Humidity: 60%</li>
            <li>Wind: 2 m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
