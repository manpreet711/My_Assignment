import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const HelpSection = () => {
  return (
    <div className="card text-center" style={{ marginTop: 28 }}>
      <div className="card-body">
        <FontAwesomeIcon
          className="pl-5 mx-2"
          color="gray"
          icon={faQuestionCircle}
        />
        <h5 className="card-title">Need Help ?</h5>
        <p className="card-text">Our Support Team is at your Disopsal.</p>
        <button>Get Help</button>
      </div>
    </div>
  );
};

export default HelpSection;
