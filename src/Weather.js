import React from "react";
//import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import bootstrap from "bootstrap";

const Cloudy = require("./icon.jpeg");
export default function Weather() {
  return (
    <div className="Weather">
      <div className="container-weather">
        <div className="row">
          <div className="col-sm-3">
            <div className="Location">
              <h1 id="location"> response.data.city</h1>
              <h2 className="current-date">Sunday October 2, 2022</h2>
              <ul className="weather-details">
                <li>
                  Humidity: <span id="humidity">60</span>%
                </li>
                <li>
                  Wind: <span id="wind">2</span> m/h
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="Current">
              <span className="current-temperature"> 78</span>
              <p id="temp-units">
                <a href="/" id="fahrenheit-link" className="active">
                  °F|
                </a>
                <a href="/" id="celsius-link">
                  °C
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="Icon">
              <img src={Cloudy} alt="Weather Description" id="icon" />
            </div>
          </div>
          <div className="col-sm-3">
            <Search />
          </div>
        </div>
      </div>
      <div className="Footer">
        <span id="coded-by">
          <a
            href="https://github.com/rsm917/react-weather"
            id="git-link"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Rebecca Shuping
        </span>
      </div>
    </div>
  );
}
