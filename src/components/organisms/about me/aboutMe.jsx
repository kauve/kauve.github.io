import React from "react";
import "./aboutMe.scss";
import logo from "../../../img/logo.png";
import img from "../../../img/img.jpeg";

function AboutMe() {
  return (
    <div className="aboutme-container-full">
      <div className="aboutme-container">
        <div className="aboutme-text">
          <img src={logo} alt="logo" />
          <p>
            Self-motivated and passionate about Front End UI development. Strong
            skills with JavaScript, CSS, HTML, React, Redux, Next.js, Node.js,
            SQL-noSQL. working on amazing user interfaces. I currently work for
            my freelance projects with the React framework, Next.js integrating
            style libraries such as ChakraUI or TailwindCSS, also integrating
            OAuth, Firestore and Stripe.
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
