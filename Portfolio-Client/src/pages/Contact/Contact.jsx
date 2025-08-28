import React, { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./Contact.css";
import { FaWhatsappSquare } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import {Zoom} from "react-awesome-reveal";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmitButton = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !message) {
        toast.error("Please fill all the fields", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: {theme},
          // transition: Bounce,
        });
        return;
      }
      const res = await axios.post(
        "http://localhost:8080/api/v1/portfolio/sendEmail",
        {
          name,
          email,
          message,
        }
      );

      //validation
      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: {theme},
          // transition: Bounce,
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: {theme},
          // transition: Bounce,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("There was an error sending your message.", {
        position: "top-center",
        autoClose: 100,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // transition: Bounce,
      });
    }
  };
  return (
    <>
      <div className="contact">
        <Fade bottom>
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <Fade right>
                    <div className="row border-line">
                      <img className="img" src="contact-me.jpg" alt="contact" />
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 xyz">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <Fade right>
                      <div className="row">
                        <h6>
                          Contact with
                          <a
                            href="https://www.linkedin.com/in/shubham-navik-61605a290/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin
                              color="blue"
                              className="ms-2"
                              size={30}
                            />
                          </a>
                          <a
                            href="https://github.com/shubham-navik"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub
                              color="black"
                              className="ms-2"
                              size={30}
                            />
                          </a>
                          <a
                            href="https://wa.me/918957488638"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsappSquare
                              color="green"
                              className="ms-2"
                              size={30}
                            />
                          </a>
                        </h6>
                      </div>
                    </Fade>
                    <div className="row px-3 py-4 aligno">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <Fade right>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className="mb-3"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </Fade>
                    </div>
                    <Fade left>
                      <div className="row px-3">
                        <input
                          type="email"
                          email="email"
                          placeholder="Enter your Email address"
                          className="mb-3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </Fade>
                    <Fade left>
                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="msg"
                          placeholder="write your Message"
                          className="mb-3 text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </Fade>
                    <Zoom>
                      <div className="row px-3">
                        <button onClick={HandleSubmitButton} className="button">
                          Send Message
                        </button>
                      </div>
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
