import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";
import AboutImage from "../../../assets/img/anis_khalfaoui.jpg";

import "./about.styles.css";

const About = () => (
  <SectionWrapper name="about">
    <span className="section__subtitle">My Intro</span>
    <h2 className="section__title">About Me</h2>

    <div className="about__container container grid">
      <img src={AboutImage} alt="about iamge" className="about__img" />

      <div className="about__data">
        <div className="about__info">
          <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years Working</span>
          </div>

          <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">16 + Projects</span>
          </div>

          {/* <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
          </div> */}
        </div>

        <p className="about__description">
          Anis is a developer with strong communication skills and great
          analytical and problem solving abilities who seeks to provide software
          solutions that delight his clients. He has enjoyed working with
          React.js, Next.js, React Native, Redux, JavaScript/Typescript,
          Node.js, Express.js, Java, Spring boot, REST APIs, SQL, MongoDB
          recently and is ready to start putting his skills to work for you.
        </p>
        <a href="#contact" className="button">
          Contact Me
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default About;
