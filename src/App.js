import React, { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
import "bootstrap/dist/css/bootstrap.min.css";
import cloudsLogo from "./assets/images/icons8-clouds-64.png";
import windLogo from "./assets/images/icons8-wind-48.png";

function App() {
  const [city, setCity] = useState("London");
  const apiKey = process.env.REACT_APP_API_KEY;
  const { locationData, weatherData } = useWeatherData(city, apiKey);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-light">
      <div className="container col-lg-4 col-md-4 col-md-12 bg-dark rounded-2 p-4">
        <div className="text-center">
          <input type="text" className="form-control-sm" />
          <button className="btn btn-light">Search</button>
        </div>
        <div className="text-center">
          <img src="" alt="weather" height="200px" />
        </div>
        <div className="text-center">
          <p className="fs-1">{weatherData && weatherData.main.temp}</p>
          <h2 className="fs-1">{locationData && locationData.name}</h2>
        </div>
        <div className="d-flex text-center">
          <div className="w-50">
            <img src={windLogo} alt="wind" height="40px" />
            <p className="d-inline">{weatherData && weatherData.wind.speed}</p>
          </div>
          <div className="w-50">
            <img src={cloudsLogo} alt="cloudy" height="40px" />
            <p className="d-inline">{weatherData && weatherData.clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
