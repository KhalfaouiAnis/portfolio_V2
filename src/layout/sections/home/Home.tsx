import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";
import ProfileImage from "../../../assets/img/anis_khalfaoui.jpg";

import "./home.styles.css";

const HomeSection = () => {
  return (
    <SectionWrapper name="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting"> Hello, I'm </span>
          <h1 className="home__name">Anis Khalfaoui</h1>
          <h3 className="home__education">Software Engineer</h3>

          <div className="home__buttons">
            <a
              download=""
              href="assets/pdf/Ansel-Cv.pdf"
              className="button button--ghost"
            >
              Download CV
            </a>
            <a href="#about" className="button">
              About me
            </a>
          </div>
        </div>

        <div className="home__handle">
          <img src={ProfileImage} alt="profile image" className="home__img" />
        </div>

        <div className="home__social">
          <a href="" target="_blank" className="home__social-link">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="" target="_blank" className="home__social-link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="" target="_blank" className="home__social-link">
            <i className="bx bxl-dribbble"></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className="bx bx-mouse home__scroll-icon"> </i>
          <span className="home__scroll-name">Scroll Down</span>
        </a>
      </div>
    </SectionWrapper>
  );
};

export default HomeSection;
