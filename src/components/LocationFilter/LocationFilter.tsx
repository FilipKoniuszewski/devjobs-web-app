import { FunctionComponent, useState, useContext, useRef } from "react";
import classNames from "classnames";

import { Locations } from "../../enums/enums";
import locationIcon from "../../assets/desktop/icon-location.svg";
import { JobContext } from "../../contexts/JobContectProvider";
import useClickOutside from "../../hooks/useClickOutside";

import "./LocationFilter.scss";

export const LocationFilter: FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false);

  const { location, onChangeLocation } = useContext(JobContext);

  const locationFilterRef = useRef(null);

  const iconClasses = classNames({
    "location-icon-wrapper": true,
    "location-icon-wrapper--active": active,
  });
  const handleFilterClick = () => {
    setActive(!active);
  };

  const handleFilterClose = () => {
    if (active) setActive(false);
  };

  useClickOutside(locationFilterRef, handleFilterClose);

  return (
    <div className='location-filter' onClick={handleFilterClick}>
      <div
        className='location-filter__container'
        ref={active ? locationFilterRef : null}
      >
        <div className={iconClasses}>
          <img src={locationIcon} alt='location-icon' />
        </div>
        <div className={"countries-filter__selected"}>{location}</div>
      </div>
      {active && (
        <div className='location-filter__options'>
          {Object.values(Locations).map((location, index) => (
            <div
              key={index}
              className='option'
              onClick={() => onChangeLocation(location)}
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
