import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import EditFieldCard from "./EditFieldComponent";

const EditContactModal = ({
  isEditingContact,
  toggleEditingContact,
  isEditingContactField,
  toggleEditingContactFields,
  contact,
}) => {
  const [id, setTeamId] = useState();

  const setTeam = (id) => {
    setTeamId(id);
  };

  return (
    <div className="half-screen">
      <div className="contact-title">
        <FontAwesomeIcon
          onClick={
            isEditingContactField && isEditingContact
              ? toggleEditingContactFields
              : toggleEditingContact
          }
          className="pl-5"
          size={"1x"}
          icon={faArrowLeft}
        />{" "}
        <h2> Contacts </h2>
      </div>
      <p className="text-muted">
        PLease Provide companys email and contact number
      </p>
      {!isEditingContactField && (
        <div className="edit-screen">
          {contact.map((data) => {
            return (
              <ContactCard
                setTeam={setTeam}
                teamName={data.teamName}
                teamId={data.id}
                emailArray={data.emailArray}
                phoneNumberArray={data.phoneNumberArray}
                toggleEditing={toggleEditingContactFields}
              ></ContactCard>
            );
          })}
        </div>
      )}
      {isEditingContactField && (
        <EditFieldCard
          contact={contact[id]}
          toggleEditingContactFields={toggleEditingContactFields}
        />
      )}
    </div>
  );
};

export default EditContactModal;
