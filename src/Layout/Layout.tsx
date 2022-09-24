import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export const Layout: FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <Header />
      <Outlet />
    </div>
  );
};
