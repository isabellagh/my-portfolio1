import React from "react";
import { Link } from "react-router-dom";
import "./pc.css";

function Pc() {
  return (
    <div className="pc">
      <div className="pc-option">
        <Link to="/project">
          <i className="bi bi-clipboard-data option-icon">Projects </i>
        </Link>
        <Link to="/skills">
          <i className="bi bi-laptop option-icon">Skills </i>
        </Link>
        <Link to="/work">
          <i className="bi bi-briefcase option-icon">Work </i>
        </Link>
        <Link to="/contact">
          <i className="bi bi-person option-icon">Contact</i>
        </Link>
      </div>
    </div>
  );
}

export default Pc;
