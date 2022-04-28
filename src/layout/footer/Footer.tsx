import React from "react";

import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Anis Khalfaoui</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__link">
              Testimonial
            </a>
          </li>

          <li>
            <a href="#work" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </ul>

        <span className="footer__copy">
          hosted with <span style={{ color: "crimson" }}>❤</span> by GitHub |
          &#169; Anis-Khalfaoui, All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
