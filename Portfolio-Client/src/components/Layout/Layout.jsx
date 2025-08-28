import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { PiToggleLeftThin } from "react-icons/pi";
import { PiToggleRightThin } from "react-icons/pi";
import "./Layout.css";
import Menu from "../Menu/Menu";
import { FaBars } from "react-icons/fa6";
const Layout = () => {
  const [toggle, setToggle] = useState(true);
  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <PiToggleLeftThin color="royalblue" size={30} />
              ) : (
                <PiToggleRightThin color="black" size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
