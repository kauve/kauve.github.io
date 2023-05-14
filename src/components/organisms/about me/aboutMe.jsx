import React from "react";
import "./aboutMe.scss";
import logo from "../../../img/logo.png";
import img from '../../../img/pp2.jpg'

function AboutMe() {
  return (
    <div className="aboutme-container-full">
      <div className="aboutme-container">
        <div className="aboutme-text">
          <img src={logo} alt="logo" />
          <p>
            Hello! I'm Carlos Hernandez, an 8th semester student in Software
            Engineering. As a React.js-focused web developer, I have strong
            skills in HTML, CSS, and JavaScript. I'm passionate about creating
            interactive and functional interfaces, and I'm excited to join a
            dynamic team and contribute to the success of innovative web
            projects.
          </p>
          <div className="buttons-container">
            <button className="see-job">See my past work</button>
            <button className="contact">Contact me</button>
          </div>
        </div>
        <div className="aboutme-img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
