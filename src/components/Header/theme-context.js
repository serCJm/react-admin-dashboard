import React from "react";
export const themes = {
  default: "theme-default",
  green: "theme-green",
  blue: "theme-blue",
  purple: "theme-purple",
  brown: "theme-brown",
  bay: "theme-bay"
};

export const ThemeContext = React.createContext({
  theme: themes.default,
  handleThemeChange: () => {} // default value
});
