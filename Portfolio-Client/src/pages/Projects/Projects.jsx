import React from "react";
import "./Projects.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Spin animation
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const projects = [
  {
    title: "Online Voting System",
    img: "/project1.png",
    badges: ["Full Stack"],
    tech: ["Nodejs", "Express", "Reactjs", "MongoDB"],
    link: "https://comfy-travesseiro-9eb3a8.netlify.app/",
  },
  {
    title: "Food Delivery Application",
    img: "/project3.png",
    badges: ["Full Stack"],
    tech: ["Nodejs", "Express", "Reactjs", "MongoDB"],
    link: "https://github.com/shubham-navik/food-del",
  },
  {
    title: "Math Puzzle Game",
    img: "./project2.png",
    badges: ["Android"],
    tech: ["Java", "Android Studio", "SQ-Lite"],
    link: "https://play.google.com/store/apps/details?id=com.intreve.mathhgame",
  },
];

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div className="container">
        <h2 className="text-center text-uppercase mt-3 mb-1">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have developed several impactful projects showcasing my expertise in
          full-stack and mobile development...
        </p>

        <div className="projects-row">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <Reveal keyframes={spin} duration={1000} triggerOnce>
                <div className="card">
                  <div className="card-image">
                    <span className="card-notify-badge">
                      {project.badges[0]}
                    </span>
                    <img src={project.img} alt={project.title} />
                  </div>

                  <div className="card-image-overlay">
                    {project.tech.map((t) => (
                      <span className="card-detail-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="card-body">
                    <h5 className="card-title text-uppercase">
                      {project.title}
                    </h5>
                    <a
                      className="ad-btn"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
