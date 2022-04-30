import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";
import ServiceCard from "./subComponents/ServiceCard";
import ModalItem from "../../../components/modal/ModalItem";

import services from "./data/services.json";
import "./services.styles.css";

const renderContent = (title: string, description: string, items: string[]) => {
  return (
    <>
      <h3 className="modal-title">{title}</h3>
      <p className="modal-description">{description}</p>
      <ul className="modal-list">
        {items.map((item) => (
          <ModalItem key={item} info={item} />
        ))}
      </ul>
    </>
  );
};

const Services = () => {
  return (
    <SectionWrapper name="services">
      <span className="section__subtitle">My Services</span>
      <h2 className="section__title">What I Offer</h2>

      <div className="services__container container grid">
        {services.map(({ title, description, items }) => {
          return (
            <ServiceCard
              key={title}
              title={title}
              content={renderContent(title, description, items)}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Services;
