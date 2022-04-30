import { themes, themeIcons } from "../context/theme/actionTypes";

const toggle = (value: string, type: "theme" | "icon"): string => {
  switch (type) {
    case "theme":
      return value === themes.DARK_THEME
        ? themes.LIGHT_THEME
        : themes.DARK_THEME;
    case "icon":
      return value === themes.DARK_THEME
        ? themeIcons.DARK_THEME_ICON
        : themeIcons.LIGHT_THEME_ICON;
    default:
      return "";
  }
};

export default toggle;
