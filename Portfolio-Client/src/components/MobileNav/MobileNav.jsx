import React, { useState } from "react";
import "./MobileNav.css";
import { BiMenu } from "react-icons/bi";
import { MdMenuOpen } from "react-icons/md";
import { RiMenuFold4Line } from "react-icons/ri";

import MobileIconsName from "../IconsWithName/MobileIconsName";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const OpenHandler = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdMenuOpen
              className="mobile-nav-icon"
              size={30}
              onClick={OpenHandler}
            />
          ) : (
            <RiMenuFold4Line
              onClick={OpenHandler}
              className="mobile-nav-icon"
              size={30}
            />
          )}
          <span className="mobile-nav-title">My Portfolio Website</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <MobileIconsName handleMenuClick={handleMenuClick} />
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
