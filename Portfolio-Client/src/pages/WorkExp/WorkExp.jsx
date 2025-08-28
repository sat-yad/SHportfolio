import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GiTeacher } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="experience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase bulge">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1f2d">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whitesmoke", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  black" }}
              date="May 2023 - July 2023"
              iconStyle={{ background: "lightyellow", color: "fff" }}
              icon={<GiTeacher />}
            >
              <h3 className="vertical-timeline-element-title">
                Teaching Assistant
              </h3>
              <a
                href="https://www.codingninjas.com/"
                className="vertical-timeline-element-subtitle"
              >
                BigTechGuru
              </a>
              <p className="paragraph">
                Mentored students and assisted them in understanding DSA and
                coding concepts
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whitesmoke", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  gray" }}
              date="Jan 2024 - April 2024"
              iconStyle={{ background: "lightblue", color: "fff" }}
              icon={<GrReactjs />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <a
                href=" https://bigtechguru.com/"
                className="vertical-timeline-element-subtitle"
              >
                BigTechGuru
              </a>
              <p className="paragraph">
                Developed and launched the professional startup website
                bigtechguru.com using Squarespace
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
