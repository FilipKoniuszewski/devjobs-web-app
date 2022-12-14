import React, { FunctionComponent, useState } from "react";
import { createContext } from "react";

import { Themes } from "../enums/enums";

export const ThemeContext = createContext({
  theme: {},
  switchTheme: () => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider: FunctionComponent<
  ThemeContextProviderProps
> = ({ children }) => {
  const switchTheme = () => {
    setWindowTheme((prevTheme) => ({
      theme: prevTheme.theme === Themes.Dark ? Themes.Light : Themes.Dark,
      switchTheme,
    }));
  };

  const [windowTheme, setWindowTheme] = useState({
    theme: Themes.Light,
    switchTheme,
  });

  return (
    <ThemeContext.Provider value={windowTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
