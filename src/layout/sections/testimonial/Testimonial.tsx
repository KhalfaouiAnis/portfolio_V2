import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SectionWrapper from "../../shared/SectionWrapper";
import TestimonialCard from "./TestimonialCard";
import data from "./data/data.json";

import "./testimonial.styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => (
  <SectionWrapper name="testimonial">
    <span className="section__subtitle">My Clients Say</span>
    <h2 className="section__title">Testimonial</h2>
    <div className="testimonial__container container">
      <Swiper
        style={{ overflow: "visible" }}
        modules={[Navigation, Pagination]}
        spaceBetween={window.screen.width > 400 ? 50 : 10}
        slidesPerView={window.screen.width > 400 ? 2 : 1}
        // navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, description }) => (
          <SwiperSlide>
            <TestimonialCard
              key={name}
              image={image}
              name={name}
              description={description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </SectionWrapper>
);

export default Testimonial;
