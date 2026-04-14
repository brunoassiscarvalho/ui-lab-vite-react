import type { ReactNode } from "react";

import { BodyText } from "../../atoms/BodyText/BodyText";
import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";

import "./showcase-template.css";

type ShowcaseTemplateProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ShowcaseTemplate({
  title,
  description,
  children,
}: ShowcaseTemplateProps) {
  return (
    <main className="template-showcase">
      <section className="template-showcase__hero">
        <Eyebrow>UI Lab</Eyebrow>
        <h1 className="template-showcase__title">{title}</h1>
        <BodyText className="template-showcase__copy">{description}</BodyText>
      </section>
      {children}
    </main>
  );
}
