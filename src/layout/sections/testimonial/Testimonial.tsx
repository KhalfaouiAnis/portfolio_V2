import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";

import "./testimonial.styles.css";

const Testimonial = () => (
  <SectionWrapper name="testimonial">
    <span className="section__subtitle">My Clients Say</span>
    <h2 className="section__title">Testimonial</h2>
    <div className="testimonial__container container grid">
      <div className="testimonial__card swiper-slide">
        <img
          src="assets/img/testimonial1.png"
          alt="Testimoial 1"
          className="testimonial__img"
        />
        <h3 className="testimonial__name">John Doe</h3>
        <p className="testimonial__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati
          at consectetur recusandae tenetur.
        </p>
      </div>

      <div className="testimonial__card swiper-slide">
        <img
          src="assets/img/testimonial2.png"
          alt="Testimoial 2"
          className="testimonial__img"
        />
        <h3 className="testimonial__name">Paula Vusy</h3>
        <p className="testimonial__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati
          at consectetur recusandae tenetur.
        </p>
      </div>

      <div className="testimonial__card swiper-slide">
        <img
          src="assets/img/testimonial3.png"
          alt="Testimoial 3"
          className="testimonial__img"
        />
        <h3 className="testimonial__name">Isabel Diana</h3>
        <p className="testimonial__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati
          at consectetur recusandae tenetur.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default Testimonial;
