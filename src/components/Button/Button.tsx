import { FunctionComponent } from "react";

import "./Button.scss";

export type ButtonProps = {
  className: string;
  content: string;
  onClick?: () => void;
};
export const Button: FunctionComponent<ButtonProps> = ({
  className,
  content,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
};
