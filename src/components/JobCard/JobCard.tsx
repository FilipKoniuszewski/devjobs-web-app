import { FunctionComponent } from "react";
import { DevJobsFields } from "../../types/types";
import { Link } from "react-router-dom";

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
    <Link to={`${id}`} className='card'>
      <div
        className='card__logo-wrapper'
        style={{ background: logoBackground }}
      >
        <img src={logo} alt='logo' />
      </div>
      <div className='card__info'>
        <div className='card__posted-at'>{postedAt}</div>
        <div className='card__contract'>{contract}</div>
      </div>
      <div className='card__job-name'>{position}</div>
      <div className='card__company-name'>{company}</div>
      <div className='card__location'>{location}</div>
    </Link>
  );
};
