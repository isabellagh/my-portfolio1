import React from "react";
import Contact from "../about/contact";
import "./contact.css";

function contact() {
  return (
    <div className="contact-me">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-left">
          <p>You can contact me here:</p>
          <Contact />
        </div>
        <div className="download">
          <a download href={require('../../../assets/resume.pdf').default}>
          <i class="bi bi-file-earmark-arrow-down"></i>
            Download my Resume 
          </a>
        </div>
      </div>
    </div>
  );
}

export default contact;
