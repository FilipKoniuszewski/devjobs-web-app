import { FunctionComponent, useContext } from "react";
import { JobContext } from "../../contexts/JobContectProvider";

import "./Checkbox.scss";

export const Checkbox: FunctionComponent = () => {
  const { isFullTime, onChangeFullTime } = useContext(JobContext);

  return (
    <div className='checkbox'>
      <input
        id='full-time'
        type='checkbox'
        checked={isFullTime}
        onChange={() => onChangeFullTime(!isFullTime)}
      />
      <label htmlFor='full-time'>Full Time Only</label>
    </div>
  );
};
