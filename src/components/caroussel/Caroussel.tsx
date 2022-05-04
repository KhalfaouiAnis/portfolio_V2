import React, { ReactElement, useState } from "react";
import "./caroussel.styles.css";
import useMountTransition from "../../hooks/useMountTransition";

interface carousselProps {
  children: ReactElement[];
}

const Caroussel = ({ children }: carousselProps) => {
  const [current, setCurrent] = useState(children[0]);
  const [isMounted, setIsMounted] = useState(true);
  const hasTransitionedIn = useMountTransition(isMounted, 500);

  const onLeftArrowClick = () => {
    if (current === children[0]) return;
    setCurrent(children[children.indexOf(current) - 1]);
  };

  const onRightArrowClick = () => {
    if (current === children[children.length - 1]) return;
    setCurrent(children[children.indexOf(current) + 1]);
  };

  return (
    <div className="caroussel__container">
      <button
        disabled={current.props === children[0].props}
        className="caroussel__left__arrow"
        onClick={() => onLeftArrowClick()}
      >
        <i className="bx bx-left-arrow-alt caroussel__button-icon"></i>
      </button>
      <div className="caroussel__content">{current}</div>
      <button
        disabled={current.props === children[children.length - 1].props}
        className="caroussel__right__arrow"
        onClick={() => onRightArrowClick()}
      >
        <i className="bx bx-right-arrow-alt caroussel__button-icon"></i>
      </button>
    </div>
  );
};

export default Caroussel;
