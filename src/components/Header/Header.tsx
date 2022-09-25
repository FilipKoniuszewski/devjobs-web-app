import { FunctionComponent, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";
import title from "../../assets/desktop/logo.svg";

import "./Header.scss";

export const Header: FunctionComponent = () => {
  const { switchTheme } = useContext(ThemeContext);
  return (
    <header className='header'>
      <img src={title} alt='title-icon' />
      <div className='toggle-theme'>
        <label htmlFor='toggle' onClick={() => switchTheme()}>
          <img src={sunIcon} alt='sun-icon' />
          <input id='toggle' type='checkbox' className='toggle' />
          <img src={moonIcon} alt='moon-icon' />
        </label>
      </div>
    </header>
  );
};
