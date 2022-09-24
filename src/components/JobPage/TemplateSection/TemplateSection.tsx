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
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
