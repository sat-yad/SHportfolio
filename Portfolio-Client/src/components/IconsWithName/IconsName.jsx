import React from "react";
import "../Menu/Menu.css";
import {
  FcBiotech,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcTodoList,
  FcVoicePresentation,
} from "react-icons/fc";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { FcAbout } from "react-icons/fc";
import { IoSchoolSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const IconsName = () => {
  return (
    <>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcHome />
              Home
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcAbout />
              About
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <IoSchoolSharp color="royalblue" />
              Education
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="techstack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBiotech />
              Tech Stack
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcTodoList />
              Projects
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcPortraitMode />
              Work Experience
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcContacts />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconsName;
