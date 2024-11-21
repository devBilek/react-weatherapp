import loupeIcon from "../../assets/images/icons8-loupe-50.png";
import "./searchBar.css";

const SearchBar = ({ newCity, btnRef, handleInputChange, handleCitySearchInput, handleCitySearchButton }) => (
  <div className="d-flex justify-content-center" id="searchBar">
    <input
      type="text"
      className="form-control-sm"
      value={newCity}
      onChange={handleInputChange}
      onKeyDown={handleCitySearchInput}
    />
    <button className="btn btn-light" onClick={handleCitySearchButton} ref={btnRef}>
      <img src={loupeIcon} alt="Search" />
    </button>
  </div>
);

export default SearchBar;
