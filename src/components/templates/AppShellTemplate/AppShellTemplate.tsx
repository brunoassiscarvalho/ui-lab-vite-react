import type { ReactNode } from "react";

import { AppHeader } from "../../organisms/AppHeader/AppHeader";
import { SideMenu } from "../../organisms/SideMenu/SideMenu";
import type { WorkspaceFeature } from "../../../features/workspaceFeatures";

import "./app-shell-template.css";

type AppShellTemplateProps = {
  features: WorkspaceFeature[];
  children: ReactNode;
};

export function AppShellTemplate({
  features,
  children,
}: AppShellTemplateProps) {
  return (
    <div className="template-app-shell">
      <AppHeader />
      <div className="template-app-shell__layout">
        <SideMenu features={features} />
        <main className="template-app-shell__content">{children}</main>
      </div>
    </div>
  );
}
