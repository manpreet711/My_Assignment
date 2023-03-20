import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faEnvelope,
  faPhone,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import api from "../api";

const ContactCard = ({
  title,
  toggleEditing,
  teamName,
  emailArray,
  phoneNumberArray,
  setTeam,
  teamId,
  contactSize,
}) => {
  const handleClick = () => {
    if (typeof setTeam != "undefined") {
      setTeam(teamId - 1);
    }
    toggleEditing();
  };

  const handleDelete = () => {
    const res = api.delete(`/contacts/${teamId}`);
    location.reload();
  };

  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div className="main-title my-2">
          <FontAwesomeIcon
            className="pl-5 mx-2"
            color="grey"
            icon={faUserCircle}
            size={"2x"}
          />
          {title && <h4 className="card-title">{title}</h4>}
          {teamName && (
            <>
              <h4 className="card-title">{teamName}</h4>
              <FontAwesomeIcon
                className="pl-5 mx-2"
                onClick={handleDelete}
                icon={faTrash}
                color="#d31a2c"
              />
            </>
          )}
          <FontAwesomeIcon
            className="pl-5 mx-2"
            onClick={handleClick}
            icon={faPencil}
            color="#d31a2c"
          />
        </div>
        <div className="card-text">
          <FontAwesomeIcon
            className="pl-5 mx-2 my-2"
            color="grey"
            icon={faEnvelope}
          />
          {emailArray && emailArray.map((data) => data + " / ")}
          {title && (
            <span className="more-email">
              {contactSize >= 1 && `+ ${contactSize}`}
            </span>
          )}
        </div>
        <div className="card-text my-4">
          <FontAwesomeIcon
            className="pl-5 mx-2 my-2"
            color="grey"
            icon={faPhone}
          />
          {phoneNumberArray && phoneNumberArray.map((data) => data + " / ")}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
