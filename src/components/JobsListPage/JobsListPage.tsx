import { FunctionComponent, useState } from "react";

import { Contract, Locations } from "../../enums/enums";
import { LocationFilter } from "../LocationFilter/LocationFilter";
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { includesText } from "../../utils/utils";
import jobs from "../../assets/data.json";
import { JobCard } from "../JobCard/JobCard";
import { Button } from "../Button/Button";

import "./JobsListPage.scss";

export const JobsListPage: FunctionComponent = () => {
  const [input, setInput] = useState<string>("");

  const [location, setLocation] = useState<Locations>(Locations.All);

  const [isFullTime, setIsFullTime] = useState<boolean>(false);

  const [JobsNumberToShow, setJobsNumberToShow] = useState<number>(12);

  const onChangeInput = (input: string) => {
    setInput(input);
  };

  const onChangeLocation = (location: Locations) => {
    setLocation(location);
  };

  const onChangeFullTime = (isFullTime: boolean) => {
    setIsFullTime(isFullTime);
  };

  const onJobsNumberUpdate = () => {
    setJobsNumberToShow((prev) => prev + 9);
  };

  if (!jobs) return null;

  const filteredJobs = jobs.filter((job) => {
    const filterPosition = !input
      ? true
      : includesText(input, job.position) || includesText(input, job.company);

    const filterFullTime = !isFullTime
      ? true
      : job.contract === Contract.FullTime;

    const filterLocation =
      location === Locations.All ? true : location === job.location;

    return filterPosition && filterFullTime && filterLocation;
  });

  const numberOfFilteredFound = filteredJobs.length;

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
        <Searchbar onChange={onChangeInput} />
        <LocationFilter filter={location} onChange={onChangeLocation} />
        <Checkbox
          label='Full Time Only'
          onChange={onChangeFullTime}
          isChecked={isFullTime}
        />
        <Button {...buttonSearchProps} />
      </section>
      <section className='jobs-list__job-section'>
        {filteredJobs.map(
          (job, index) =>
            index < JobsNumberToShow && <JobCard key={job.id} jobData={job} />
        )}
      </section>
      {JobsNumberToShow < numberOfFilteredFound && (
        <Button {...buttonLoadMoreProps} />
      )}
    </div>
  );
};
