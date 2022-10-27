import React from "react";
import "./WeatherForecast.css";

export default function ForecastWeatherDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        className="forecast-icon"
      />

      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temp-max"> {maxTemp()}</span>{" "}
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
