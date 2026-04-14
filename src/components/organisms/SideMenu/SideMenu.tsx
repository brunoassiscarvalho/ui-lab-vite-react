import type { WorkspaceFeature } from "../../../features/workspaceFeatures";
import { FeatureNavItem } from "../../molecules/FeatureNavItem/FeatureNavItem";

import "./side-menu.css";

type SideMenuProps = {
  features: WorkspaceFeature[];
};

export function SideMenu({ features }: SideMenuProps) {
  return (
    <aside className="organism-side-menu" aria-label="Feature navigation">
      <nav className="organism-side-menu__nav">
        {features.map((feature) => (
          <FeatureNavItem
            key={feature.id}
            feature={feature}
            to={`/workspace/${feature.id}`}
          />
        ))}
      </nav>
    </aside>
  );
}
