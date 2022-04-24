import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";

import "./work.styles.css";

const Work = () => (
  <SectionWrapper name="work">
    <span className="section__subtitle">My Projects</span>
    <h2 className="section__title">Recent Works</h2>
    <div className="work__container container grid">
      <div className="work__card mix web">
        <img src="assets/img//work1.jpg" alt="work" className="work__img" />
        <h3 className="work__title">Web Design</h3>
        <a href="#" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
      <div className="work__card mix movil">
        <img src="assets/img//work2.jpg" alt="work" className="work__img" />
        <h3 className="work__title">App movil</h3>
        <a href="#" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
      <div className="work__card mix design">
        <img src="assets/img//work3.jpg" alt="work" className="work__img" />
        <h3 className="work__title">Brand design</h3>
        <a href="#" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__icon"></i>
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default Work;
