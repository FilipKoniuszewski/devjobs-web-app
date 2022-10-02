import { FunctionComponent, useContext, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

import loopIcon from "../../assets/desktop/icon-search.svg";
import { JobContext } from "../../contexts/JobContectProvider";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import "./Searchbar.scss";

export const Searchbar: FunctionComponent = () => {
  const { input, onChangeInput } = useContext(JobContext);

  const windowDimensions = useWindowDimensions();

  const ref = useRef<any>(null);

  const setFocus = () => {
    ref?.current?.focus();
  };

  return (
    <div className='searchbar' onClick={setFocus}>
      <div className='searchbar__icon'>
        <img src={loopIcon} alt='loupe-icon' />
      </div>
      <input
        ref={ref}
        placeholder={
          windowDimensions.width > 1200
            ? "Filter by title, companies..."
            : windowDimensions.width > 340
            ? "Filter by title..."
            : "Filter"
        }
        type='text'
        value={input}
        onChange={(event) => onChangeInput(event.target.value)}
      />
      {input && (
        <div className='searchbar__clear' onClick={() => onChangeInput("")}>
          <AiOutlineClose />
        </div>
      )}
    </div>
  );
};
