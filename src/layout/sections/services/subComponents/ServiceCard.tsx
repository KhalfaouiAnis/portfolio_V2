import React from "react";
import { useModalContext } from "../../../../context/modal/modalContext";

const ServiceCard = ({ title, content }: any) => {
  const { displayModal } = useModalContext();
  return (
    <div className="services__card">
      <h3 className="services__title">{title}</h3>
      <span className="services__button" onClick={() => displayModal(content)}>
        See more <i className="bx bx-right-arrow-alt services__icon"></i>
      </span>
    </div>
  );
};

export default ServiceCard;
