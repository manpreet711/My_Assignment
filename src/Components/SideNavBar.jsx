import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faThLarge,
  faArchive,
  faUsers,
  faHandshake,
  faList,
  faTrophy,
  faInfoCircle,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import HelpSection from "./HelpCard";

const SideNavBar = () => {
  return (
    <div className="sidebar">
      <img
        style={{ lineHeight: 4 }}
        src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
        alt="Profile image"
        width="44"
        height="45"
        className="image--cover"
      />{" "}
      AT Links
      <a href="#home">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faThLarge} />
        Dashboard
      </a>
      <a href="#news">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faArchive} />
        Orders
      </a>
      <a href="#contact">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faUsers} />
        Team Members
      </a>
      <a href="#about">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faHandshake} />
        Partners
      </a>
      <a href="#about">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faList} />
        Product Listings
      </a>
      <a href="#about">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faTrophy} />
        Awards & Honurs
      </a>
      <a className="active" href="#about">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faInfoCircle} />
        About Us
      </a>
      <a href="#about">
        <FontAwesomeIcon className="pl-5 mx-2" icon={faMoneyBill} />
        Payment info
      </a>
      <HelpSection />
    </div>
  );
};

export default SideNavBar;
