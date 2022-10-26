import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="location"> {props.data.city}</h1>
      <ul className="weather-details">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-sm-6">
          <div className="Icon">
            <img src={props.data.icon} alt={props.data.description} id="icon" />
          </div>
          <div>
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </div>
        </div>
        <div className="col-sm-6">
          <ul className="weather-details">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} m/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
