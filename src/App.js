import React, { useState } from "react";
import useWeatherData from "./hooks/useWeatherData";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar/searchBar";
import WeatherImage from "./components/WeatherImage/weatherImage";
import WeatherInfo from "./components/WeatherInfo/weatherInfo";
import WeatherDetails from "./components/WeatherDetails/weatherDetails";

function App() {
  const [city, setCity] = useState("Moscow");
  const [newCity, setNewCity] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  const { locationData, weatherData } = useWeatherData(city, apiKey);

  const handleInputChange = (event) => {
    setNewCity(event.target.value);
    console.log(newCity);
  };

  const handleCitySearch = () => {
    if (newCity.trim() !== "") {
      setCity(newCity);
      setNewCity("");
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center text-light">
      <div className="container col-lg-4 col-md-4 col-md-12 bg-dark rounded-2 p-4">
        <SearchBar
          handleInputChange={handleInputChange}
          handleCitySearch={handleCitySearch}
        />
        <WeatherImage />
        <WeatherInfo locationData={locationData} weatherData={weatherData} />
        <WeatherDetails weatherData={weatherData} />
      </div>
    </div>
  );
}
export default App;
