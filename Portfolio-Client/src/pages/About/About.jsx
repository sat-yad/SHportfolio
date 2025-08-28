import React from "react";
import "./About.css";
import "animate.css";
import { JackInTheBox } from "react-awesome-reveal";
const About = () => {
  return (
    <>
      <JackInTheBox>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="shubham2.jpg" alt="Profile-pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1 className="animate__animated animate__pulse">About Me</h1>
              <p>
                I am 2025 Computer Engineering graduate from the National Institute
                of Technology, Kurukshetra. Proficient in C/C++, Python, HTML,
                CSS, JavaScript, Tailwind, React.js, Node.js, Express.js,
                MongoDB, and more. I am an avid competitive programmer with a
                CodeChef rating of 1600+ (3⭐), a Codeforces rating of 1235+
                (Pupil), and a LeetCode contest ranking of 1875+ (Knight). I
                have actively participated in multiple hackathons and coding
                challenges. With a comprehensive understanding of algorithms and
                data structures, coupled with strong problem-solving skills, I
                have successfully completed the Coding Ninjas course with
                excellence and contributed as a Teaching Assistant at Coding
                Ninjas. With a robust academic foundation, hands-on project
                experience, and a passion for coding, I am eager to take on new
                challenges and contribute meaningfully to the field of software
                engineering.
              </p>
            </div>
          </div>
        </div>
      </JackInTheBox>
    </>
  );
};

export default About;
