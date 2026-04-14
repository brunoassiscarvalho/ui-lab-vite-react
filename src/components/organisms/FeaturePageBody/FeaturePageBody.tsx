import type { WorkspaceFeaturePage as WorkspacePage } from "../../../features/workspaceFeatures";
import { BodyText } from "../../atoms/BodyText/BodyText";
import { FeaturePageTabs } from "../../molecules/FeaturePageTabs/FeaturePageTabs";
import { ComponentCard } from "../ComponentCard/ComponentCard";

import "./feature-page-body.css";

type FeaturePageBodyProps = {
  layout: WorkspacePage["layout"];
  items: string[];
  siblingPages: WorkspacePage[];
  featureId: string;
};

export function FeaturePageBody({
  layout,
  items,
  siblingPages,
  featureId,
}: FeaturePageBodyProps) {
  return (
    <div className="organism-feature-page-body">
      <FeaturePageTabs featureId={featureId} pages={siblingPages} />

      {layout === "card-grid" ? (
        <div className="organism-feature-page-body__grid">
          {items.map((item, index) => (
            <ComponentCard
              key={`${item}-${index}`}
              title={`Card ${index + 1}`}
              description={item}
            />
          ))}
        </div>
      ) : (
        <div className="organism-feature-page-body__rows">
          {items.map((item, index) => (
            <section
              key={`${item}-${index}`}
              className="organism-feature-page-body__row"
            >
              <h2 className="organism-feature-page-body__row-title">
                Row {index + 1}
              </h2>
              <BodyText>{item}</BodyText>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
