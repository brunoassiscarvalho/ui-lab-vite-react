import type { ReactNode } from "react";

import "./header.css";

type HeaderProps = {
  title: string;
  actions?: ReactNode;
};

export function Header({ title, actions }: HeaderProps) {
  return (
    <div className="organism-header">
      <h1 className="organism-header__title">{title}</h1>
      {actions && <div className="organism-header__actions">{actions}</div>}
    </div>
  );
}
