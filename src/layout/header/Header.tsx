import React, { useRef } from "react";
import { useThemeContext } from "../../context/theme/themeContext";
import { themes, themeIcons } from "../../context/theme/actionTypes";

import "./header.styles.css";

const Header = () => {
  const { theme, icon, toggleTheme } = useThemeContext();
  const headerRef = useRef<HTMLElement>(null);

  const handleThemeChange = () => {
    const newTheme =
      theme === themes.DARK_THEME ? themes.LIGHT_THEME : themes.DARK_THEME;
    const currentIcon =
      newTheme === themes.DARK_THEME
        ? themeIcons.DARK_THEME_ICON
        : themeIcons.LIGHT_THEME_ICON;
    toggleTheme(newTheme, currentIcon);
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem("selected-icon", currentIcon);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  // useEffect(() => {
  //   if (window.scrollY > 50) {
  //     headerRef?.current?.classList.add("scroll-header");
  //   } else {
  //     headerRef?.current?.classList.remove("scroll-header");
  //   }
  // }, [document.documentElement.scrollHeight]);

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Anis
        </a>
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
          className={`bx bx-${icon} change-theme`}
          onClick={() => handleThemeChange()}
        ></i>
      </nav>
    </header>
  );
};

export default Header;
