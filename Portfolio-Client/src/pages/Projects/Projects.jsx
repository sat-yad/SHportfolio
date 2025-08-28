import React from "react";
import "./Projects.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Define spin animation
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div className="container">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have developed several impactful projects showcasing my expertise
          in full-stack and mobile development. I built a secure Online Voting
          System using the MERN stack, featuring JWT-based authentication,
          role-based access, and real-time vote tracking, ensuring
          one-person-one-vote integrity with over 100 simulated users.
          Additionally, I created a Food Delivery Application integrating the
          Stripe payment gateway for secure transactions, along with an admin
          dashboard to manage orders and improve efficiency. I also developed
          a Math Puzzle Game for Android that includes multiple difficulty
          levels to boost user engagement and an SQLite database for offline
          progress tracking. These projects highlight my strong
          problem-solving abilities, experience with modern frameworks, and
          ability to deliver practical, real-world solutions.
        </p>

        <div className="row" id="ads">
          {[
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
          ].map((project, idx) => (
            <Reveal keyframes={spin} duration={1000} triggerOnce key={idx}>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">{project.badges[0]}</span>
                    <img src={project.img} alt={project.title}></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    {project.tech.map((t) => (
                      <span className="card-detail-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">{project.title}</h5>
                    </div>
                    <a className="ad-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
