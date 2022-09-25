import { FunctionComponent, useState } from "react";
import classNames from "classnames";

import { Locations } from "../../enums/enums";
import locationIcon from "../../assets/desktop/icon-location.svg";

import "./LocationFilter.scss";

type LocationFilterProps = {
  filter: Locations;
  onChange: (location: Locations) => void;
};

export const LocationFilter: FunctionComponent<LocationFilterProps> = ({
  filter,
  onChange,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const selectClassNames = classNames({
    "countries-filter__selected": true,
    "countries-filter__selected--active": active,
    "countries-filter__selected--inactive": !active,
  });
  return (
    <div className='location-filter' onClick={() => setActive(!active)}>
      <div className='location-filter__container'>
        <div className='location-icon-wrapper'>
          <img src={locationIcon} alt='location-icon' />
        </div>
        <div className={selectClassNames}>{filter}</div>
      </div>
      {active && (
        <div className='location-filter__options'>
          {Object.values(Locations).map((location) => (
            <div
              key={location}
              className='option'
              onClick={() => onChange(location)}
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
