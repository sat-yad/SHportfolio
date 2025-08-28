import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

// Tada animation
const tada = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  10%, 20% { transform: scale3d(.9, .9, .9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg); }
  100% { transform: scale3d(1, 1, 1); }
`;

const App = () => {
  const { theme } = useTheme();
  return (
    <div id={theme}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <WorkExp />
        <Contact />
        <div className="footer pb-3 ms-3">
          <Reveal keyframes={tada} duration={1000} triggerOnce>
            <h4 className="text-center kala">
              Made With 😍 by Shubham @Copyright 2023
            </h4>
          </Reveal>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </div>
  );
};

export default App;
