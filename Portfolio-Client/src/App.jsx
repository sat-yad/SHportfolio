import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import style from "./../node_modules/dom-helpers/esm/css";
import { useTheme } from "./Context/ThemeContext";
import {Tada} from "react-awesome-reveal";
import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const { theme } = useTheme();
  return (
    <>
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
          transition:Bounce
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
            <Tada>
              <h4 className="text-center kala">
                Made With 😍 by Shubham @Copyright 2023
              </h4>
            </Tada>
          </div>
        </div>
        <ScrollToTop
          smooth
          color="#f29f67"
          style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        />
      </div>
    </>
  );
};

export default App;
