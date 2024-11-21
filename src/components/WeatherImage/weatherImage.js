const WeatherImage = ({ weatherData}) => (
  <div className="text-center">
    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="weather" height="200px" />
  </div>
);
export default WeatherImage;
