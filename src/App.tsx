import React, { Fragment } from "react";
import Modal from "./components/modal/Modal";

import Header from "./layout/header/Header";
import MainLayout from "./layout/main/MainLayout";
import HomeSection from "./layout/sections/home/Home";
import AboutSection from "./layout/sections/about/About";
import SkillsSection from "./layout/sections/skills/Skills";
import ServicesSection from "./layout/sections/services/Services";
import WorkSection from "./layout/sections/work/Work";
import TestimonialSection from "./layout/sections/testimonial/Testimonial";
import ContactSection from "./layout/sections/contactme/Contact";

import Footer from "./layout/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <MainLayout>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialSection />
        <ContactSection />
      </MainLayout>
      <Footer />
      <Modal />
    </Fragment>
  );
}

export default App;
