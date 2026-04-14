import { Home, BarChart3 } from "lucide-react";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate/DashboardTemplate";
import { Header } from "../../components/organisms/Header/Header";
import {
  NavigationMenu,
  type MenuItem,
} from "../../components/organisms/NavigationMenu/NavigationMenu";
import { UserMenu } from "../../components/molecules/UserMenu/UserMenu";

import { Outlet } from "react-router";

export default function Dashboard() {
  const menuItems: MenuItem[] = [
    { id: "feature1", label: "Feature1", icon: <Home size={20} /> },
    { id: "feature2", label: "Feature2", icon: <BarChart3 size={20} /> },
  ];

  return (
    <DashboardTemplate
      header={
        <Header
          title="Welcome to Dashboard"
          actions={
            <div className="dashboard__header-actions">
              <input
                type="text"
                placeholder="Search..."
                className="dashboard__search-input"
              />
              <UserMenu />
            </div>
          }
        />
      }
      sidebar={<NavigationMenu items={menuItems} />}
    >
      <Outlet />
    </DashboardTemplate>
  );
}
