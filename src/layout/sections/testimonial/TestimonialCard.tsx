import React from "react";

interface TestimonialCardProps {
  image: string;
  name: string;
  description: string;
}

const TestimonialCard = ({
  image,
  name,
  description,
}: TestimonialCardProps) => (
  <div className="testimonial__card">
    <img
      src={require(`../../../assets/img/${image}`)}
      alt={name}
      className="testimonial__img"
    />
    <h3 className="testimonial__name">{name}</h3>
    <p className="testimonial__description">{description}</p>
  </div>
);

export default TestimonialCard;
