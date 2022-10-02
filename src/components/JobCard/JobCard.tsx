import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { DevJobsFields } from "../../types/types";

import "./JobCard.scss";

export type JobCardProps = {
  jobData: DevJobsFields;
};
export const JobCard: FunctionComponent<JobCardProps> = ({ jobData }) => {
  const {
    id,
    logo,
    logoBackground,
    postedAt,
    contract,
    position,
    company,
    location,
  } = jobData;
  return (
    <article>
      <Link to={`${id}`} className='card'>
        <div
          className='card__logo-wrapper'
          style={{ background: logoBackground }}
          role='company-logo'
        >
          <img src={logo} alt={`${company}-logo`} />
        </div>
        <div className='job-secondary-info'>
          <div className='card__posted-at' role='time-posted'>
            {postedAt}
          </div>
          <BsCircleFill size={5} />
          <div className='card__contract' role='contract-type'>
            {contract}
          </div>
        </div>
        <h3 className='card__job-name' role='job-name'>
          {position}
        </h3>
        <div className='card__company-name' role='company-name'>
          {company}
        </div>
        <div className='card__location' role='job-location'>
          {location}
        </div>
      </Link>
    </article>
  );
};
