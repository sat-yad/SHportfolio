import React from "react";
import "./Menu.css";
import Icons from "../Icons/Icons";
import IconsName from "../IconsWithName/IconsName";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="shubham1.jpg" alt="profile pic" />
            </div>
            <Fade>
              <IconsName />
            </Fade>
          </Zoom>
        </>
      ) : (
        <>
          <Fade>
            <Icons />
          </Fade>
        </>
      )}
    </>
  );
};

export default Menu;
