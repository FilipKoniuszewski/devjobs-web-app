import { FunctionComponent } from "react";
import { Button } from "../../Button/Button";

import "./MainSection.scss";

export type MainSectionProps = {
  postedAt: string;
  company: string;
  contract: string;
  position: string;
  website: string;
  location: string;
  description: string;
};
export const MainSection: FunctionComponent<MainSectionProps> = ({
  postedAt,
  contract,
  position,
  website,
  location,
  description,
}) => {
  const buttonProps = {
    content: "Apply Now",
    onClick: () => {
      window.open(`${website}/apply`, "_blank")!.focus();
    },
    className: "primary",
  };

  return (
    <section className='job__main-section'>
      <div>
        <div className='job__details'>
          <div className='job__details-info'>
            <div className='job__details-posted-at'>{postedAt}</div>
            <div className='job__details-contract'>{contract}</div>
          </div>
          <h2>{position}</h2>
          <div className='job__details-location'>{location}</div>
        </div>
        <Button {...buttonProps} />
      </div>
      <p>{description}</p>
    </section>
  );
};
