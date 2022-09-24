import { FunctionComponent } from "react";
import { Button } from "../../Button/Button";

import "./ApplicationSection.scss";

export type ApplicationSectionProps = {
  position: string;
  company: string;
  website: string;
};
export const ApplicationSection: FunctionComponent<ApplicationSectionProps> = ({
  position,
  company,
  website,
}) => {
  const buttonProps = {
    content: "Apply Now",
    onClick: () => {
      window.open(`${website}/apply`, "_blank")!.focus();
    },
    className: "primary",
  };
  return (
    <section className='job__application-section'>
      <div>
        <div className='position'>{position}</div>
        <div className='company'>{company}</div>
      </div>
      <Button {...buttonProps} />
    </section>
  );
};
