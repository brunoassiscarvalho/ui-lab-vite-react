import type { ReactNode } from "react";

import "./dashboard-template.css";

type DashboardTemplateProps = {
  header: ReactNode;
  sidebar: ReactNode;
  children: ReactNode;
};

export function DashboardTemplate({
  header,
  sidebar,
  children,
}: DashboardTemplateProps) {
  return (
    <div className="template-dashboard">
      <header className="template-dashboard__header">{header}</header>
      <div className="template-dashboard__body">
        <aside className="template-dashboard__sidebar">{sidebar}</aside>
        <main className="template-dashboard__content">{children}</main>
      </div>
    </div>
  );
}
