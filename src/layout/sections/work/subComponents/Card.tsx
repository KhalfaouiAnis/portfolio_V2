import React from "react";

const Card = (image: string, title: string, link: string = "#") => (
  <div className="work__card">
    <img src={image} alt="work" className="work__img" />
    <h3 className="work__title">{title}</h3>
    <a href={link} className="work__button">
      Demo <i className="bx bx-right-arrow-alt work__icon"></i>
    </a>
  </div>
);

export default Card;
