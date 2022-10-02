import { FunctionComponent } from "react";

import "./TemplateSection.scss";

export type TemplateSectionProps = {
  title: string;
  content: string;
  items: string[];
  ordered: boolean;
};
export const TemplateSection: FunctionComponent<TemplateSectionProps> = ({
  title,
  content,
  items,
  ordered,
}) => {
  return (
    <section className='template-section'>
      <h2>{title}</h2>
      <p>{content}</p>
      {ordered ? (
        <ol>
          {items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
