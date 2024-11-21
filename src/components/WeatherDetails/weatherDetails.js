import windLogo from "../../assets/images/icons8-wind-48.png";
import cloudsLogo from "../../assets/images/icons8-clouds-64.png";

const WeatherDetails = ({ weatherData }) => (
  <div className="d-flex text-center fs-4">
    <div className="w-50">
      <img src={windLogo} alt="wind" height="40px" className="me-2" />
      <p className="d-inline">{weatherData && weatherData.wind.speed} m/s</p>
    </div>
    <div className="w-50">
      <img src={cloudsLogo} alt="cloudy" height="40px" className="me-2" />
      <p className="d-inline">{weatherData && weatherData.clouds.all}%</p>
    </div>
  </div>
);
export default WeatherDetails;
