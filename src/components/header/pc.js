import React from "react";
import { Link } from "react-router-dom";
import "./pc.css";

function Pc() {
  return (
    <div className="pc">
      <div className="pc-option" id="project">
        <Link to="/project">
          <i className="bi bi-clipboard-data option-icon">Projects </i>
        </Link>
      </div>
      <div className="pc-option" id="skills">
        <Link to="/skills">
          <i className="bi bi-laptop option-icon">Skills </i>
        </Link>
      </div>
      {/* <div className="pc-option" id="work">
        <Link to="/work">
          <i className="bi bi-briefcase option-icon">Work </i>
        </Link>
      </div> */}
      <div className="pc-option" id="contact">
        <Link to="/contact">
          <i className="bi bi-person option-icon">Contact</i>
        </Link>
      </div>
    </div>
  );
}

export default Pc;
