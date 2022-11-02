import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import bootstrap from "bootstrap";
import { ThreeDots } from "react-loader-spinner";
const Cloudy = require("./icon.jpeg");

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const ApiKey = "393aa3ab02bfb9bf0et3b4b7c32oea88";

    let ApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}&units=imperial`;
    axios.get(ApiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container-weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-9">
                <input
                  type="search"
                  className="city-input form-control"
                  autoComplete="off"
                  autoFocus="on"
                  placeholder="Enter a city.."
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-sm-3">
                <button
                  className="btn btn-secondary change-city-button"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="Spinner">
        <ThreeDots
          height="60"
          width="60"
          radius="9"
          color="##5C636A"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }
}
