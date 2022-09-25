import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header";
import { ThemeContext } from "../contexts/ThemeContextProvider";

export const Layout: FunctionComponent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='layout' data-theme={theme}>
      <Header />
      <Outlet />
    </div>
  );
};
