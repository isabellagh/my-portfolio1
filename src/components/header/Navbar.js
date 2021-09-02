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
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-list menu-icon"></i>
          </div>
          <div>{isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
