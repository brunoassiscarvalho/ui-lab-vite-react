import { NavLink } from "react-router";

import type { WorkspaceFeature } from "../../../features/workspaceFeatures";
import { Icon } from "../../atoms/Icon/Icon";

import "./feature-nav-item.css";

type FeatureNavItemProps = {
  feature: WorkspaceFeature;
  to: string;
};

export function FeatureNavItem({ feature, to }: FeatureNavItemProps) {
  return (
    <NavLink
      to={to}
      end={false}
      className={({ isActive }) =>
        [
          "molecule-feature-nav-item",
          isActive ? "molecule-feature-nav-item--active" : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
    >
      <span className="molecule-feature-nav-item__icon-wrap">
        <Icon name={feature.icon} />
      </span>
      <span className="molecule-feature-nav-item__copy">
        <span className="molecule-feature-nav-item__label">{feature.title}</span>
        <span className="molecule-feature-nav-item__summary">{feature.summary}</span>
      </span>
    </NavLink>
  );
}
