import React from "react";
import "./TechStack.css";
import { TechStackList } from "../../utils/TechStackList";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technology Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Including Programming Languages,Frameworks,Databases,front-end
            and back-end and APIs
          </p>
          <div className="row">
            {TechStackList.map((tech) => (
              <Fade left>
                <div key={tech._id} className="col-md-3">
                  <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="alig-self-center">
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
        </RubberBand>
      </div>
    </>
  );
};

export default TechStack;
