import { Contract } from "../enums/enums";

export type DevJobsFields = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: RequirementFields;
  role: RoleFields;
};

export type RequirementFields = {
  content: string;
  items: string[];
};

export type RoleFields = {
  content: string;
  items: string[];
};
