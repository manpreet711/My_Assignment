import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faComment } from "@fortawesome/free-solid-svg-icons";

const StatementCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div className="main-title my-2">
          <FontAwesomeIcon
            className="pl-5 mx-2"
            color="gray"
            icon={faComment}
            size={"2x"}
          />
          <h5 className="card-title">Statement</h5>
          <FontAwesomeIcon
            className="pl-5 mx-5"
            color="#d31a2c"
            icon={faPencil}
          />
        </div>
        <p className="card-text">You Think it we ink it</p>
      </div>
    </div>
  );
};

export default StatementCard;
