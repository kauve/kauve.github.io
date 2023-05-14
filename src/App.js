import React from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import AboutMe from "./components/organisms/about_me/aboutMe";
import AppsWork from "./components/organisms/apps_work/apps";
import Header from "./components/organisms/header/header";
import Skills from "./components/organisms/skills/skills";
import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <Element name="header" className="section">
        <Header />
      </Element>
      <Element name="aboutMe" className="section">
        <AboutMe />
      </Element>

      <Element name="skills" className="section">
        <Skills />
      </Element>

      <Element name="appsWork" className="section">
        <AppsWork />
      </Element>
    </div>
  );
}

export default App;
