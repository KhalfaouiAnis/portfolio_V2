import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";
import { skills } from "./data/skills.json";

import "./skills.styles.css";
import SkillItemContent from "./subComponents/SkillItemContent";

const Skills = () => (
  <SectionWrapper name="skills">
    <span className="section__subtitle">My abilities</span>
    <h2 className="section__title">My Skills</h2>

    <div className="skills__container container grid">
      {/* {skills.map(({ data, type }) => (
        <SkillItemContent data={data} type={type} />
      ))} */}

      <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">HTML5</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">CSS3/SASS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Js/Ts</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Materil UI</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">ReactJs</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills__content">
        <h3 className="skills__title">Backend developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">JAVA</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Spring Boot</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bxs-badge-check"></i>
              <div>
                <h3 className="skills__name">MongoDb</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Skills;
