import { FunctionComponent } from "react";

type CompanyLogoProviderProps = {
  logo: string;
};
export const CompanyLogoProvider: FunctionComponent<
  CompanyLogoProviderProps
> = ({ logo }) => {
  return <img src={logo} alt='logo-icon' />;
};
