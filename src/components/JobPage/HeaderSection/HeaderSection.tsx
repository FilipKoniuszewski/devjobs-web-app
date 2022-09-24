import { FunctionComponent } from "react";
import { Button } from "../../Button/Button";

import "./HeaderSection.scss";

export type HeaderSectionProps = {
  logo: string;
  logoBackground: string;
  company: string;
  website: string;
};
export const HeaderSection: FunctionComponent<HeaderSectionProps> = ({
  logo,
  logoBackground,
  company,
  website,
}) => {
  const buttonProps = {
    content: "Company Site",
    onClick: () => {
      window.open(`${website}`, "_blank")!.focus();
    },
    className: "secondary",
  };
  return (
    <section className='job__header-section'>
      <div className='job__logo-wrapper' style={{ background: logoBackground }}>
        <img src={logo} alt='company-logo' />
      </div>
      <div className='job__company-name'>
        <h2>{company}</h2>
        <div className='job__company-link'>{website}</div>
      </div>
      <Button {...buttonProps} />
    </section>
  );
};
