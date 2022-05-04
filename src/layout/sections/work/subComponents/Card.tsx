import React from "react";
import useMountTransition from "../../../../hooks/useMountTransition";

interface CardProps {
  image: string;
  title: string;
  link: string;
  isMounted: boolean;
}

const Card = ({ image, title, link, isMounted }: CardProps) => {
  const hasTransitionedIn = useMountTransition(isMounted, 500);

  return (
    <>
      {(hasTransitionedIn || isMounted) && (
        <div
          className={`work__card ${hasTransitionedIn && "in"} ${
            isMounted && "visible"
          }`}
        >
          <img src={image} alt="work" className="work__img" />
          <h3 className="work__title">{title}</h3>
          <a href={link} className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
          </a>
        </div>
      )}
    </>
  );
};
export default Card;
