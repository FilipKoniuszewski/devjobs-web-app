import { FunctionComponent, useContext } from "react";
import { ThemeContext, Themes } from "../../contexts/ThemeContextProvider";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";
import title from "../../assets/desktop/logo.svg";

import "./Header.scss";

export const Header: FunctionComponent = () => {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <header className='header'>
      <img src={title} alt='title' />
      <div className='toggle-theme'>
        <img src={sunIcon} alt='sun' />
        <label htmlFor='toggle' onClick={() => switchTheme()}>
          <input id='toggle' type='checkbox' className='toggle' />
        </label>
        <img src={moonIcon} alt='moon' />
      </div>
    </header>
  );
};
