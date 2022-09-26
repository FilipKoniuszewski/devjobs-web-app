import { FunctionComponent, useContext } from "react";
import loopIcon from "../../assets/desktop/icon-search.svg";
import { JobContext } from "../../contexts/JobContectProvider";

import "./Searchbar.scss";

export const Searchbar: FunctionComponent = () => {
  const { onChangeInput } = useContext(JobContext);

  return (
    <div className='searchbar'>
      <div className='searchbar__icon'>
        <img src={loopIcon} alt='loupe-icon' />
      </div>
      <input
        placeholder='Filter by title, companies...'
        type='text'
        onChange={(event) => onChangeInput(event.target.value)}
      />
    </div>
  );
};
