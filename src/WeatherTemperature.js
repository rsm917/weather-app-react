import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="current-temperature">
          {" "}
          {Math.round(props.fahrenheit)}
        </span>
        <span className="unit">
          °F|<a href="/">°C</a>{" "}
        </span>
      </div>
    );
  } else {
    return "°C";
  }
}
