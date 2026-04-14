import { NavLink } from "react-router";

import type { WorkspaceFeaturePage } from "../../../features/workspaceFeatures";

import "./feature-page-tabs.css";

type FeaturePageTabsProps = {
  featureId: string;
  pages: WorkspaceFeaturePage[];
};

export function FeaturePageTabs({
  featureId,
  pages,
}: FeaturePageTabsProps) {
  return (
    <nav className="molecule-feature-page-tabs" aria-label="Feature pages">
      {pages.map((page) => {
        const to =
          page.id === "page-1"
            ? `/workspace/${featureId}`
            : `/workspace/${featureId}/${page.id}`;

        return (
          <NavLink
            key={page.id}
            to={to}
            end={page.id === "page-1"}
            className={({ isActive }) =>
              [
                "molecule-feature-page-tabs__link",
                isActive ? "molecule-feature-page-tabs__link--active" : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            {page.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
