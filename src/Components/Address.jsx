import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faMapMarker } from "@fortawesome/free-solid-svg-icons";

const AddressCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div className="main-title my-2">
          <FontAwesomeIcon
            className="pl-5"
            color="grey"
            icon={faMapMarker}
            size={"2x"}
          />
          <h5 className="card-title">Address</h5>
          <FontAwesomeIcon
            className="pl-5 mx-5"
            color="#d31a2c"
            icon={faPencil}
          />
        </div>
        <p className="card-text">
          C1/ 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujrat, India.
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
