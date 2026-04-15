import { Children } from "react";

export default function Header(children: { children: React.ReactNode }) {
  return <header className="template-dashboard__header">{children}</header>;
}
