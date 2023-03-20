import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
              alt=""
              width="55"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <input
            className="form-control input-align"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="mx-5">Checkout(200)</button>
          <div>
            <img
              src="https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg"
              alt="Profile image"
              width="55"
              height="50"
              className="image--cover"
            />
            User Admin
            <FontAwesomeIcon className="pl-5" icon={faAngleDown} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
