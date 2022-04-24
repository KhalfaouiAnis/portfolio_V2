import React from "react";
import SectionWrapper from "../../shared/SectionWrapper";

import "./contact.styles.css";

const Contact = () => (
  <SectionWrapper name="contact">
    <span className="section__subtitle">Get in touch</span>
    <h2 className="section__title">Contact Me</h2>
    <div className="contact__container container">
      <div className="contact__content">
        <h3 className="contact__title">Talk to me</h3>
        <div className="contact__info">
          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <div className="contact__card-data">anis@gmail.com</div>

            <a
              href="mailto:aniskhalfaoui9@gmail.com"
              target="_blank"
              className="contact__button"
            >
              Write me
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bxl-whatsapp contact__card-icon"></i>
            <h3 className="contact__card-title">Whatsapp</h3>
            <div className="contact__card-data">999-999-999</div>

            <a href="" target="_blank" className="contact__button">
              Write me
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bxl-messenger contact__card-icon"></i>
            <h3 className="contact__card-title">Messenger</h3>
            <div className="contact__card-data">user.fb123</div>

            <a
              href="https://m.me.aniskhalfaoui"
              target="_blank"
              className="contact__button"
            >
              Write me
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="contact__content">
        <h3 className="contact__title">Write me your project</h3>

        <form action="" className="contact__form">
          <div className="contact__form-div">
            <label className="contact__form-tag">Names</label>
            <input
              type="text"
              placeholder="Insert your name"
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-div">
            <label className="contact__form-tag">Mail</label>
            <input
              type="email"
              placeholder="Insert your email"
              className="contact__form-input"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <label className="contact__form-tag">Project</label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Write your project description"
              className="contact__form-input"
            ></textarea>
          </div>

          <button className="button">Send Message</button>
        </form>
      </div>
    </div>
  </SectionWrapper>
);

export default Contact;
