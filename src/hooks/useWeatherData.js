import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherData = (city, apiKey) => {
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (city.trim() === "") return;

    const fetchLocationData = async () => {
      try {
        const geoResponse = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apiKey}`
        );
        setLocationData(geoResponse.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLocationData();
  }, [city, apiKey]);

  useEffect(() => {
    if (!locationData) return; 

    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=${apiKey}&units=metric`
        );
        setWeatherData(weatherResponse.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    };
    fetchWeatherData();
  }, [locationData, apiKey]);

  return { locationData, weatherData, isLoading };
};

export default useWeatherData;