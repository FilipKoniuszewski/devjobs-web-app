import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";

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
          <div className='job-secondary-info'>
            <div className='job__details-posted-at'>{postedAt}</div>
            <BsCircleFill size={5} />
            <div className='job__details-contract'>{contract}</div>
          </div>
          <h1>{position}</h1>
          <div className='job__details-location'>{location}</div>
        </div>
        <Button {...buttonProps} />
      </div>
      <p>{description}</p>
    </section>
  );
};
