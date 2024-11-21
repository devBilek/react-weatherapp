import loupeIcon from "../../assets/images/icons8-loupe-50.png";
import "./searchBar.css";

const SearchBar = () => (
  <div className="d-flex justify-content-center" id="searchBar">
    <input type="text" className="form-control-sm" />
    <button className="btn btn-light">
      <img src={loupeIcon} alt="Search" />
    </button>
  </div>
);

export default SearchBar;
