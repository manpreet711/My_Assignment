import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faLink,
  faGlobeAfrica,
  faPeopleGroup,
  faKiwiBird,
} from "@fortawesome/free-solid-svg-icons";

const SocialMediaCard = () => {
  return (
    <div className="card m-sm-3">
      <div className="card-body">
        <div className="main-title my-2">
          <FontAwesomeIcon
            className="pl-5 mx-2"
            color="gray"
            icon={faLink}
            size={"2x"}
          />
          <h5 className="card-title">Social Media & Links</h5>
          <FontAwesomeIcon
            className="pl-5 mx-5"
            color="#d31a2c"
            icon={faPencil}
          />
        </div>
        <div className="py-4 px-1 social-media">
          <div className="social-media-div">
            <FontAwesomeIcon
              className="pl-5 mx-2"
              color="gray"
              icon={faGlobeAfrica}
              size={"2x"}
            />
            <span>Website</span>
          </div>
          <div className="social-media-div">
            <FontAwesomeIcon
              className="pl-5 mx-2"
              color="gray"
              icon={faPeopleGroup}
              size={"2x"}
            />
            <span>Instagram</span>
          </div>
          <div className="social-media-div">
            <FontAwesomeIcon
              className="pl-5 mx-2"
              color="gray"
              icon={faGlobeAfrica}
              size={"2x"}
            />
            <span>Facebook</span>
          </div>
          <div className="social-media-div">
            <FontAwesomeIcon
              className="pl-5 mx-2"
              color="gray"
              icon={faKiwiBird}
              size={"2x"}
            />
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
