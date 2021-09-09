import React from "react";
import { ContactData } from "./ContactData";
import "./contact.css";

function contact() {
  const data = ContactData;
  return (
    <div className="contact-links">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="contact-icon-div">
              <img src={item.icon} className="contact-icon" alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default contact;
