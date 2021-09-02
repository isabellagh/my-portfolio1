import React, { useState } from "react";
import "./navbar.css";
import Pc from "./pc";
import Mobile from "./mobile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">Isabella Henriques</div>
      <div className="menu">
        <div className="pc-menu">
          <Pc />
        </div>
        <div className="mobile-menu">
          <div>
            <i className="bi bi-list"></i>
          </div>
          <div>{isOpen && <Mobile />}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
