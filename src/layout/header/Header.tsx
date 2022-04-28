import React, { useRef, useState } from "react";
import { useThemeContext } from "../../context/theme/themeContext";
import { useModalContext } from "../../context/modal/modalContext";
import Joke from "./subComponents/Joke";
import toggle from "./utils/toggle";
import useOnScroll from "../../hooks/useOnScroll";
import { scrollHandler, scrollActiveHandler } from "./utils/scrollHandlers";

import "./header.styles.css";

const Header = () => {
  const { theme, icon, toggleTheme } = useThemeContext();
  const { displayModal } = useModalContext();
  const [iconClass, setIconClass] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);

  useOnScroll(() => scrollHandler(headerRef));
  useOnScroll(() => scrollActiveHandler());

  const handleThemeChange = () => {
    const newTheme = toggle(theme, "theme");
    const currentIcon = toggle(newTheme, "icon");
    toggleTheme(newTheme, currentIcon);
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Anis
        </a>
        <i
          title="Don't Laugh Challenge"
          className="bx bx-smile clickable"
          onClick={() => displayModal(<Joke />)}
        ></i>
        {/* Fixed bottom Navigation menu */}
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* Theme change btn */}
        <i
          onMouseEnter={() => setIconClass("bx-spin")}
          onMouseLeave={() => setIconClass("")}
          className={`bx bx-${icon} ${iconClass} change-theme`}
          onClick={() => handleThemeChange()}
        ></i>
      </nav>
    </header>
  );
};

export default Header;
