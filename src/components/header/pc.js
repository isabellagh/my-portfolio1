import React from "react";
import { NavLink } from "react-router-dom";
import "./pc.css";

function Pc() {
  return (
    <div className="pc">
      <div className="pc-option" id="project">
        <NavLink to="/projects" className="projects" activeClassName="projects-active">
          <i className="bi bi-clipboard-data option-icon">Projects </i>
        </NavLink>
      </div>
      <div className="pc-option" id="skills">
        <NavLink to="/skills">
          <i className="bi bi-laptop option-icon">Skills </i>
        </NavLink>
      </div>
      {/* <div className="pc-option" id="work">
        <NavLink to="/work">
          <i className="bi bi-briefcase option-icon">Work </i>
        </NavLink>
      </div> */}
      <div className="pc-option" id="contact">
        <NavLink to="/contact">
          <i className="bi bi-person option-icon">Contact</i>
        </NavLink>
      </div>
    </div>
  );
}

export default Pc;
