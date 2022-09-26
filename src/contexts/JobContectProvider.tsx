import React, { FunctionComponent, useState } from "react";
import { createContext } from "react";

import { Contract, Locations } from "../enums/enums";
import { includesText } from "../utils/utils";
import jobData from "../assets/data.json";

export const JobContext = createContext({
  jobs: jobData,
  location: Locations.All,
  isFullTime: false,
  JobsNumberToShow: 12,
  numberOfJobsFound: jobData.length,
  onChangeInput: (input: string) => {},
  onChangeLocation: (location: Locations) => {},
  onChangeFullTime: (isFullTime: boolean) => {},
  onJobsNumberUpdate: () => {},
});

type JobContextProviderProps = {
  children: React.ReactNode;
};

export const JobContextProvider: FunctionComponent<JobContextProviderProps> = ({
  children,
}) => {
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

  const jobs = jobData.filter((job) => {
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

  const numberOfJobsFound = jobs.length;

  return (
    <JobContext.Provider
      value={{
        jobs,
        location,
        isFullTime,
        JobsNumberToShow,
        numberOfJobsFound,
        onChangeInput,
        onChangeLocation,
        onChangeFullTime,
        onJobsNumberUpdate,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
