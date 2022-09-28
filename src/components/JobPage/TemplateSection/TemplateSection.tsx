import { FunctionComponent } from "react";

import "./TemplateSection.scss";

export type TemplateSectionProps = {
  title: string;
  content: string;
  items: string[];
};
export const TemplateSection: FunctionComponent<TemplateSectionProps> = ({
  title,
  content,
  items,
}) => {
  return (
    <section className='template-section'>
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
