import { FunctionComponent } from "react";

import "./Checkbox.scss";

type CheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: (isFullTime: boolean) => void;
};
export const Checkbox: FunctionComponent<CheckboxProps> = ({
  label,
  isChecked,
  onChange,
}) => {
  return (
    <div className='checkbox'>
      <label htmlFor='full-time'>{label}</label>
      <input
        id='full-time'
        type='checkbox'
        checked={isChecked}
        onChange={() => onChange(!isChecked)}
      />
    </div>
  );
};
