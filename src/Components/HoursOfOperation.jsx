import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faHourglass } from "@fortawesome/free-solid-svg-icons";

const HoursOfOperationCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div className="main-title my-2">
          <FontAwesomeIcon
            className="pl-5 mx-2"
            color="grey"
            icon={faHourglass}
            size={"2x"}
          />
          <h5 className="card-title">Hours Of Operations</h5>
          <FontAwesomeIcon
            className="pl-5 mx-5"
            color="#d31a2c"
            icon={faPencil}
          />
        </div>
        <p className="card-text">Monday To Friday 09:00 Am To 06: 00 Pm.</p>
      </div>
    </div>
  );
};

export default HoursOfOperationCard;
