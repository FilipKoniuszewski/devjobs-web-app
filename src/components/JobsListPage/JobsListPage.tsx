import { FunctionComponent, useContext, useState } from "react";

import searchIcon from "../../assets/mobile/icon-search.svg";
import mobileFilter from "../../assets/mobile/icon-filter.svg";
import { LocationFilter } from "../LocationFilter/LocationFilter";
import { Searchbar } from "../Searchbar/Searchbar";
import { Checkbox } from "../Checkbox/Checkbox";
import { JobCard } from "../JobCard/JobCard";
import { Button } from "../Button/Button";
import { JobContext } from "../../contexts/JobContectProvider";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Modal } from "../Modal/Modal";

import "./JobsListPage.scss";

export const JobsListPage: FunctionComponent = () => {
  const jobContext = useContext(JobContext);
  const windowDimensions = useWindowDimensions();
  const { jobs, JobsNumberToShow, numberOfJobsFound, onJobsNumberUpdate } =
    jobContext;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const buttonLoadMoreProps = {
    content: "Load More",
    className: "primary",
    onClick: onJobsNumberUpdate,
  };

  const openModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className='home-page'>
      <section className='jobs-list__filter-section'>
        <Searchbar />
        <LocationFilter />
        <Checkbox />
        <button className='mobile-filter-button' onClick={openModal}>
          <img src={mobileFilter} alt='mobile-filter' />
        </button>
        <button
          className='primary'
          style={{
            padding:
              windowDimensions.width > 1200 ? "1rem 2rem" : "0.8rem 1rem",
          }}
        >
          {windowDimensions.width > 1200 ? (
            "Search"
          ) : (
            <img src={searchIcon} alt='mobile-search' />
          )}
        </button>
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
      <Modal isVisible={isModalOpen} onClose={closeModal} />
    </div>
  );
};
