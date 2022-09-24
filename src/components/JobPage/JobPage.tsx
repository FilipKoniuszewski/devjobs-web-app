import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { ApplicationSection } from "./ApplicationSection/ApplicationSection";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { MainSection } from "./MainSection/MainSection";
import { TemplateSection } from "./TemplateSection/TemplateSection";
import jobs from "../../assets/data.json";

import "./JobPage.scss";

export const JobPage: FunctionComponent = () => {
  const { offerId } = useParams();

  const offerData = jobs.find((job) => job.id === Number(offerId));

  if (!offerData) return null;

  const { requirements, role } = offerData;

  const requirementsTitle = "Requirements";

  const roleTitle = "What You Will Do";

  return (
    <div className='job-page'>
      <HeaderSection {...offerData} />
      <div>
        <MainSection {...offerData} />
        <TemplateSection {...requirements} title={requirementsTitle} />
        <TemplateSection {...role} title={roleTitle} />
      </div>
      <ApplicationSection {...offerData} />
    </div>
  );
};
