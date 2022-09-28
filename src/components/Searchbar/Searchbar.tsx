import { FunctionComponent, useContext, useRef } from "react";
import loopIcon from "../../assets/desktop/icon-search.svg";
import { JobContext } from "../../contexts/JobContectProvider";

import "./Searchbar.scss";

export const Searchbar: FunctionComponent = () => {
  const { onChangeInput } = useContext(JobContext);

  const ref = useRef<any>(null);

  const setFocus = () => {
    ref?.current?.focus();
  };

  return (
    <div className='searchbar' onClick={() => setFocus()}>
      <div className='searchbar__icon'>
        <img src={loopIcon} alt='loupe-icon' />
      </div>
      <input
        ref={ref}
        placeholder='Filter by title, companies...'
        type='text'
        onChange={(event) => onChangeInput(event.target.value)}
      />
    </div>
  );
};
