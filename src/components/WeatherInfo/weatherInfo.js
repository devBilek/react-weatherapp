const WeatherInfo = ({ locationData, weatherData }) => (
  <div className="text-center">
    <h2 className="fs-1 m-0">{weatherData && weatherData.main.temp}℃</h2>
    <h2 className="fs-1">{locationData && locationData.name} {locationData &&<img src={`https://flagsapi.com/${locationData.country}/flat/32.png`}/>}</h2>
  </div>
);
export default WeatherInfo;
