import { FunctionComponent } from "react";
import loopIcon from "../../assets/desktop/icon-search.svg";

import "./Searchbar.scss";

export type SearchBarProps = {
  onChange: (input: string) => void;
};
export const Searchbar: FunctionComponent<SearchBarProps> = ({ onChange }) => {
  return (
    <div className='searchbar'>
      <div className='searchbar__icon'>
        <img src={loopIcon} alt='loupe-icon' />
      </div>
      <input
        placeholder='Filter by title, companies...'
        type='text'
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
