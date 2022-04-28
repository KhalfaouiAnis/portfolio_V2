import React, { useReducer, useContext, Fragment } from "react";
import reducer from "./themeReducer";
import { actionTypes } from "./actionTypes";

// If user previously selected a theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
document.body.classList.add(selectedTheme || "");

export interface themeState {
  theme: "dark-theme" | "light-theme" | string;
  icon: "moon" | "sun" | string;
  toggleTheme: (theme: string, icon: string) => any;
}

const initialState: themeState = {
  theme: selectedTheme || "dark-theme",
  icon: selectedIcon || "moon",
  toggleTheme: () => {},
};

const ThemeContext = React.createContext(initialState);

const ThemeContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = (theme: string, icon: string) => {
    localStorage.setItem("selected-theme", theme);
    localStorage.setItem("selected-icon", icon);
    document.body.classList.remove(state.theme);
    document.body.classList.add(theme);

    dispatch({
      type: actionTypes.TOGGLE_THEME,
      payload: {
        theme,
        icon,
      },
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

ThemeContextProvider.defaultProps = {
  children: <Fragment />,
};

export { ThemeContextProvider, initialState, useThemeContext };
