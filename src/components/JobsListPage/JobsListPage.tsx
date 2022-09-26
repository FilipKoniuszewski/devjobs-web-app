import { FunctionComponent, useContext } from "react";

import { LocationFilter } from "../LocationFilter/LocationFilter";
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { JobCard } from "../JobCard/JobCard";
import { Button } from "../Button/Button";

import "./JobsListPage.scss";
import { JobContext } from "../../contexts/JobContectProvider";

export const JobsListPage: FunctionComponent = () => {
  const jobContext = useContext(JobContext);
  const { jobs, JobsNumberToShow, numberOfJobsFound, onJobsNumberUpdate } =
    jobContext;

  const buttonSearchProps = {
    content: "Search",
    className: "primary",
  };

  const buttonLoadMoreProps = {
    content: "Load More",
    className: "primary",
    onClick: onJobsNumberUpdate,
  };

  return (
    <div className='home-page'>
      <section className='jobs-list__filter-section'>
        <Searchbar />
        <LocationFilter />
        <Checkbox />
        <Button {...buttonSearchProps} />
      </section>
      <section className='jobs-list__job-section'>
        {jobs.map(
          (job, index) =>
            index < JobsNumberToShow && <JobCard key={job.id} jobData={job} />
        )}
      </section>
      {JobsNumberToShow < numberOfJobsFound && (
        <Button {...buttonLoadMoreProps} />
      )}
    </div>
  );
};
