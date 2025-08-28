import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";
import "./Education.css";
import {Bounce} from "react-awesome-reveal";
const Education = () => {
  return (
    <>
      <div className="container education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <Bounce>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "whitesmoke", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  gray" }}
              date="2021-2025"
              iconStyle={{ background: "royalblue", color: "#fff" }}
              icon={<IoSchoolSharp />}
            >
              <h3 className="vertical-timeline-element-title">B.Tech</h3>
              <h4 className="vertical-timeline-element-subtitle">
                NIT Kurukshetra,Haryana, India
              </h4>
            </VerticalTimelineElement>
          </Bounce>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "whitesmoke", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2018-2020"
            iconStyle={{ background: "royalblue", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Balbhadra IC Pali Subaspur,Jaunpur, India
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "whitesmoke", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2016-2018"
            iconStyle={{ background: "royalblue", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">10th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Balbhadra IC Pali Subaspur,Jaunpur, India
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
