import React from "react";
import "./navbar.css";
import Pc from "./pc";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Isabella Henriques</div>
      <div className="menu">
        <div className="pc-menu">
            <Pc />
        </div>
        <div className="mobile-menu"> mobile
            <div>
            <i className="bi bi-list"></i>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
