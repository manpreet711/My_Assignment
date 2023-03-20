import React, { useEffect, useState } from "react";
import api from "../api";

const EditFieldCard = ({ contact, toggleEditingContactFields }) => {
  const [emailList, setEmailList] = useState([contact.emailArray]);
  const [phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    setEmailList(contact.emailArray);
    setPhoneList(contact.phoneNumberArray);
  }, []);

  const handleSave = () => {
    const data = contact;
    data.emailArray = emailList;
    data.phoneNumberArray = phoneList;
    api.put(`/contacts/${contact.id}`, data);
    toggleEditingContactFields();
  };

  const handleContactChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...phoneList];
    list[index] = value;
    setPhoneList(list);
  };
  const handleaddclick = (type) => {
    if (type === "email") {
      setEmailList([...emailList, " "]);
    } else if (type === "contact") {
      setPhoneList([...phoneList, ""]);
    }
  };
  const handleEmailChange = (e, index) => {
    const { id, value } = e.target;
    const list = [...emailList];
    list[index] = value;
    setEmailList(list);
  };

  const handleremove = (index, type) => {
    if (type === "email") {
      const list = [...emailList];
      list.splice(index, 1);
      setEmailList(list);
    } else if (type === "contact") {
      const list = [...phoneList];
      list.splice(index, 1);
      setPhoneList(list);
    }
  };

  return (
    <>
      <div className="edit-screen">
        <label>Email ID:</label>
        {emailList.map((emailData, i) => {
          return (
            <div className="my-3" key={emailData}>
              <form>
                <input
                  type="email"
                  id={i}
                  name="email"
                  onChange={(e) => handleEmailChange(e, i)}
                  value={emailData}
                />
                {emailList.length !== 1 && (
                  <button
                    className="btn btn-sm btn-dark mx-1"
                    onClick={() => handleremove(i, "email")}
                  >
                    Remove
                  </button>
                )}
              </form>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => handleaddclick("email")}
          className="my-button w-100 my-3"
        >
          Add More
        </button>
        <br />
        <label>Contact Number:</label>
        {phoneList.map((contactData, i) => {
          return (
            <div className="my-3" key={contactData}>
              <form>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={(e) => handleContactChange(e, i)}
                  value={contactData}
                />
                {phoneList.length !== 1 && (
                  <button
                    className="btn btn-sm btn-dark mx-1"
                    onClick={() => handleremove(i, "contact")}
                  >
                    Remove
                  </button>
                )}
              </form>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => handleaddclick("contact")}
          className="my-button w-100 my-3"
        >
          Add More
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block p-3 py-2 w-100"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditFieldCard;
