import React from "react";
import "./Projects.css";
import { Spin } from "react-awesome-reveal";
const Projects = () => {
  return (
    <>
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
            <Spin>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img src="/project1.png" alt="project1"></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Nodejs</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">Reactjs</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">
                        Online Voting System
                      </h5>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://comfy-travesseiro-9eb3a8.netlify.app/"
                    >
                      View{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img src="/project3.png" alt="project2"></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Nodejs</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">Reactjs</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">
                        Food Delivery Application
                      </h5>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://github.com/shubham-navik/food-del"
                    >
                      View{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card rounded">
                  <div className="card-image">
                    <span className="card-notify-badge">Android</span>
                    <img src="./project2.png" alt="project3"></img>
                  </div>
                  <div className="card-image-overlay m-auto mt-3">
                    <span className="card-detail-badge">Java</span>
                    <span className="card-detail-badge">Android Studio</span>
                    <span className="card-detail-badge">SQ-Lite</span>
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase m-auto">
                        Math Puzzle Game
                      </h5>
                    </div>
                    <a
                      className="ad-btn"
                      href="https://play.google.com/store/apps/details?id=com.intreve.mathhgame"
                    >
                      View{" "}
                    </a>
                  </div>
                </div>
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
