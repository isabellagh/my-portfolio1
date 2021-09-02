import React from "react";
import { Link } from "react-router-dom";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="bi bi-x"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <Link to="/project">
            <i className="bi bi-clipboard-data option-icon">Projects </i>
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="/skills">
            <i className="bi bi-laptop option-icon">Skills </i>
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="/work">
            <i className="bi bi-briefcase option-icon">Work </i>
          </Link>
        </div>
        <div className="mobile-option">
          <Link to="/contact">
            <i className="bi bi-person option-icon">Contact</i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
