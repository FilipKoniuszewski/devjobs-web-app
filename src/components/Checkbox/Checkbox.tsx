import { FunctionComponent, useContext } from "react";
import { JobContext } from "../../contexts/JobContectProvider";

import "./Checkbox.scss";

export const Checkbox: FunctionComponent = () => {
  const { isFullTime, onChangeFullTime } = useContext(JobContext);

  return (
    <label htmlFor='full-time' className='checkbox'>
      <input
        id='full-time'
        type='checkbox'
        checked={isFullTime}
        onChange={() => onChangeFullTime(!isFullTime)}
      />
      <span className='checkbox-input' />
      Full Time Only
    </label>
  );
};
