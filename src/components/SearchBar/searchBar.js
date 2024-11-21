import loupeIcon from "../../assets/images/icons8-loupe-50.png";
import "./searchBar.css";

const SearchBar = ({ handleInputChange, handleCitySearch }) => (
  <div className="d-flex justify-content-center" id="searchBar">
    <input
      type="text"
      className="form-control-sm"
      onChange={handleInputChange}
    />
    <button className="btn btn-light" onClick={handleCitySearch}>
      <img src={loupeIcon} alt="Search" />
    </button>
  </div>
);

export default SearchBar;
