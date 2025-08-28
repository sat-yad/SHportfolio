import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStackList";
import { Reveal, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Define RubberBand keyframes
const rubberBand = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(.95, 1.05, 1); }
  75% { transform: scale3d(1.05, .95, 1); }
  100% { transform: scale3d(1, 1, 1); }
`;

const TechStack = () => {
  return (
    <div className="container techstack" id="techstack">
      <Reveal keyframes={rubberBand} triggerOnce>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technology Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including Programming Languages, Frameworks, Databases, front-end
          and back-end, and APIs
        </p>
      </Reveal>
      <div className="row">
        {TechStackList.map((tech) => (
          <Fade left key={tech._id} triggerOnce>
            <div className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
