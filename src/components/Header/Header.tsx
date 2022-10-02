import { FunctionComponent, useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/ThemeContextProvider";
import sunIcon from "../../assets/desktop/icon-sun.svg";
import moonIcon from "../../assets/desktop/icon-moon.svg";
import title from "../../assets/desktop/logo.svg";
import { Locations, Themes } from "../../enums/enums";
import { JobContext } from "../../contexts/JobContectProvider";

import "./Header.scss";

export const Header: FunctionComponent = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  const { onChangeLocation, onChangeInput, onChangeFullTime } =
    useContext(JobContext);

  const clearFilters = () => {
    onChangeLocation(Locations.All);
    onChangeInput("");
    onChangeFullTime(false);
  };
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <Link to='/' onClick={clearFilters}>
          <img src={title} alt='title-icon' />
        </Link>
        <div className='toggle-wrapper' onClick={() => switchTheme()}>
          <img src={sunIcon} alt='sun-icon' />
          <label className='switch'>
            <input type='checkbox' checked={theme === Themes.Dark} disabled />
            <span className='slider round'></span>
          </label>
          <img src={moonIcon} alt='moon-icon' />
        </div>
      </div>
    </header>
  );
};
