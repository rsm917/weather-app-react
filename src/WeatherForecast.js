import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  //console.log(props);

  let apiKey = "393aa3ab02bfb9bf0et3b4b7c32oea88";
  let latitude = props.latitude; //47.6038321;
  let longitude = props.longitude; //-122.330062
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          Icon
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max"> 60°</span>{" "}
            <span className="WeatherForecast-temp-min">48°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
