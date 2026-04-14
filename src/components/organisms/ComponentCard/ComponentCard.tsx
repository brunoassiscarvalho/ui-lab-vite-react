import type { ReactNode } from "react";

import { CardHeader } from "../../molecules/CardHeader/CardHeader";

import "./component-card.css";

type ComponentCardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function ComponentCard({
  title,
  description,
  children,
}: ComponentCardProps) {
  return (
    <section className="organism-component-card">
      <CardHeader title={title} description={description} />
      {children ? (
        <div className="organism-component-card__content">{children}</div>
      ) : null}
    </section>
  );
}
