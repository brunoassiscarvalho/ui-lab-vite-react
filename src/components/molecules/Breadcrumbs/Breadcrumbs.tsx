import { Link } from "react-router";

import "./breadcrumbs.css";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="molecule-breadcrumbs">
      <ol className="molecule-breadcrumbs__list">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="molecule-breadcrumbs__item">
            {item.to ? (
              <Link to={item.to} className="molecule-breadcrumbs__link">
                {item.label}
              </Link>
            ) : (
              <span className="molecule-breadcrumbs__current">{item.label}</span>
            )}
            {index < items.length - 1 ? (
              <span className="molecule-breadcrumbs__divider">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
