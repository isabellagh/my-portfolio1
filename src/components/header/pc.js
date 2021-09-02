import React from "react";
import { Link } from "react-router-dom";
import "./pc.css";

function Pc() {
  return (
    <div className="pc">
      <div className="pc-option">
        <Link to="/project">
          <i className="bi bi-clipboard-data">Projects</i>
        </Link>
        <Link to="/skills">
          <i className="bi bi-laptop">Skills</i>
        </Link>
        <Link to="/work">
          <i className="bi bi-briefcase">Work</i>
        </Link>
        <Link to="/Contact">
          <i className="bi bi-person">Contact</i>
        </Link>
      </div>
    </div>
  );
}

export default Pc;
