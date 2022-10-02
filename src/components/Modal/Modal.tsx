import classNames from "classnames";
import { FunctionComponent, useContext, useRef, useState } from "react";

import locationIcon from "../../assets/desktop/icon-location.svg";
import useClickOutside from "../../hooks/useClickOutside";
import { JobContext } from "../../contexts/JobContectProvider";
import { Locations } from "../../enums/enums";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";

import "./Modal.scss";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
};
export const Modal: FunctionComponent<ModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [isLocationActive, setIsLocationActive] = useState<boolean>(false);

  const { onChangeLocation, location } = useContext(JobContext);

  const modalRef = useRef(null);

  const onClickLocation = () => {
    setIsLocationActive(!isLocationActive);
  };

  const onSelectOption = (location: Locations) => {
    onChangeLocation(location);
    setIsLocationActive(false);
  };

  const locationClassNames = classNames({
    "modal__filter-location": true,
    "modal__filter-location--active": isLocationActive,
  });

  useClickOutside(modalRef, onClose);

  return (
    <>
      {isVisible && (
        <>
          <div className='overlay'></div>
          <div className='modal' ref={modalRef}>
            <div className={locationClassNames} onClick={onClickLocation}>
              <img src={locationIcon} alt='mobile-location-filter' />
              {location}
            </div>
            {!isLocationActive && (
              <>
                <Checkbox />
                <div className='modal__close'>
                  <Button
                    className='primary'
                    content='Search'
                    onClick={onClose}
                  />
                </div>
              </>
            )}
            {isLocationActive && (
              <div className='modal__filter-location__options'>
                {Object.values(Locations).map((location, index) => (
                  <div
                    key={index}
                    className='modal__option'
                    onClick={() => onSelectOption(location)}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
