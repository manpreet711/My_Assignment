import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPencil } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import ContactCard from "./ContactCard";
import AddressCard from "./Address";
import SocialMediaCard from "./SocialMedia";
import HoursOfOperationCard from "./HoursOfOperation";
import StatementCard from "./Statement";
import EditContactModal from "./EditContactModal";
import api from "../api";

const MainComponent = () => {
  const [contact, setContact] = useState([{}]);
  const [titleText, setTitleText] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingContactField, setIsEditingContactField] = useState(false);

  const handleChange = (e) => {
    setTitleText(e.target.value);
  };
  const toggleEditingContact = () => {
    setIsEditingContact(!isEditingContact);
  };
  const toggleEditingContactFields = () => {
    setIsEditingContactField(!isEditingContactField);
  };
  //Title API call
  const title = async () => {
    const response = await api.get("/title");
    return response.data;
  };
  const updateTitle = async () => {
    const response = await api.put("/title", { title: titleText });
    setTitleText(response.data.title);
  };
  const setDefaultTitleText = async () => {
    const data = await title();
    setTitleText(data.title);
  };
  const contacts = async () => {
    const response = await api.get("/contacts");
    return response;
  };
  useEffect(() => {
    const getTitle = async () => {
      const data = await title();
      if (data) setTitleText(data.title);
    };
    getTitle();
    const getAllContact = async () => {
      const data = await contacts();
      if (data) {
        setContact(data.data);
      }
    };
    getAllContact();
  }, []);

  return (
    <>
      {isEditingContact && (
        <EditContactModal
          isEditingContact={isEditingContact}
          isEditingContactField={isEditingContactField}
          toggleEditingContactFields={toggleEditingContactFields}
          toggleEditingContact={toggleEditingContact}
          contact={contact}
        />
      )}
      <div className="main-container">
        <h2 className="title">About Us</h2>
        <div className="title-section">
          <img
            src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg"
            alt="Profile image"
            width="64"
            height="62"
            className="image--cover"
          />{" "}
          <h3 className="title-text">
            A.T. Links <br /> <span className="sub-title">Digital INks</span>
          </h3>
          <div className="ms-5">
            <FontAwesomeIcon icon={faCheckCircle} />
            <a href="#" className="ms-2">
              <u>Verify Company</u>
            </a>
          </div>
        </div>
        <div className="row col-6 w-80 ms-1 mb-sm-3 mt-sm-2">
          <div>
            {!isEditingTitle && <span className="text-muted">{titleText}</span>}
            {!isEditingTitle && (
              <FontAwesomeIcon
                className="mx-2"
                onClick={() => {
                  setIsEditingTitle(true);
                }}
                color="#d31a2c"
                icon={faPencil}
              />
            )}
            {isEditingTitle && (
              <div className="row col-md-12 mr-0">
                <div className="col-md-8 px-0">
                  <input
                    type="text"
                    className="form-control w-100"
                    value={titleText}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mt-1">
                  <Button
                    className="me-1"
                    variant="primary"
                    size="sm"
                    type="submit"
                    onClick={() => {
                      setIsEditingTitle(false);
                      updateTitle();
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    className="ml-1"
                    size="sm"
                    onClick={() => {
                      setIsEditingTitle(false);
                      setDefaultTitleText();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="tab">
          <div className="tab-navigator">
            <div className="active">Info</div>
            <div>FAQ</div>
            <div>Complaints and feedback</div>
            <div>Privacy Policy</div>
            <div>Terms and conditions</div>
          </div>

          <div className="first-row">
            <ContactCard
              title={"Contact"}
              emailArray={contact[0].emailArray}
              phoneNumberArray={contact[0].phoneNumberArray}
              toggleEditing={toggleEditingContact}
              contactSize={contact.length - 1}
            ></ContactCard>
            <AddressCard></AddressCard>
            <HoursOfOperationCard></HoursOfOperationCard>
            <SocialMediaCard></SocialMediaCard>
            <StatementCard></StatementCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
