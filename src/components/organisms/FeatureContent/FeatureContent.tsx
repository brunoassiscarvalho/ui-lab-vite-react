import type { ReactNode } from "react";
import { Link } from "react-router";

import { Breadcrumbs, type BreadcrumbItem } from "../../molecules/Breadcrumbs/Breadcrumbs";
import { BodyText } from "../../atoms/BodyText/BodyText";
import { Icon } from "../../atoms/Icon/Icon";

import "./feature-content.css";

type FeatureContentProps = {
  title: string;
  description: string;
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  goBackTo?: string;
  goBackLabel?: string;
};

export function FeatureContent({
  title,
  description,
  children,
  breadcrumbs,
  goBackTo,
  goBackLabel = "Go back",
}: FeatureContentProps) {
  return (
    <section className="organism-feature-content">
      <header className="organism-feature-content__header">
        {goBackTo ? (
          <Link to={goBackTo} className="organism-feature-content__back">
            <Icon name="arrow-left" />
            {goBackLabel}
          </Link>
        ) : null}
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="organism-feature-content__heading">
          <h1 className="organism-feature-content__title">{title}</h1>
          <BodyText>{description}</BodyText>
        </div>
      </header>
      <div className="organism-feature-content__body">{children}</div>
    </section>
  );
}
