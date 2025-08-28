import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
import Resume from "../../assets/Docs/Satyam_Resume.pdf";
import { useTheme } from "../../Context/ThemeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () =>
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <AiFillSun size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer !",
                    "Competitive Programmer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8957488638"
                rel="noreferrer"
                target="blank"
              >
                Hire me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="myshubham_resumeO.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
