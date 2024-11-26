const WeatherInfo = ({ locationData, weatherData }) => (
  <div className="text-center">
    <h2 className="fs-5 mb-2">{weatherData.weather[0].description}</h2>
    <h2 className="fs-1 m-0">{weatherData.main.temp}℃</h2>
    <h2 className="fs-1">
      {locationData.name}{" "}
      <img
        src={`https://flagsapi.com/${locationData.country}/flat/32.png`}
        alt="flag"
      />
    </h2>
  </div>
);
export default WeatherInfo;
