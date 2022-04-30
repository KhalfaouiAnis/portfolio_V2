import React, { useRef, useState } from "react";
import { useThemeContext } from "../../context/theme/themeContext";
import { useModalContext } from "../../context/modal/modalContext";
import toggle from "../../utils/toggle";
import useOnScroll from "../../hooks/useOnScroll";
import { scrollHandler, scrollActiveHandler } from "../../utils/scrollHandlers";
import Tooltip from "../../components/tooltip/Tooltip";

import "./header.styles.css";
import Joke from "../../components/joke/Joke";

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
        <a>
          <i
            className="bx bx-smile clickable"
            onClick={() => displayModal(<Joke />)}
          ></i>
          {/* <Tooltip direction="bottom" text="Laugh Challange" /> */}
        </a>
        {/* Fixed bottom Navigation menu */}
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home"></i>
                <Tooltip text="Home" />
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
                <Tooltip text="About" />
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
                <Tooltip text="Skills" />
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
                <Tooltip text="Work" />
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>
                <Tooltip text="Contact" />
              </a>
            </li>
          </ul>
        </div>
        {/* Theme change btn */}
        {/* Add Theme Color Selector */}
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
