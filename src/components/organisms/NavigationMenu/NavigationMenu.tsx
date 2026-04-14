import type { ReactNode } from "react";
import { Link } from "react-router";

import "./navigation-menu.css";

export type MenuItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
};

type NavigationMenuProps = {
  items: MenuItem[];
  footer?: ReactNode;
};

export function NavigationMenu({ items, footer }: NavigationMenuProps) {
  return (
    <div className="organism-navigation-menu">
      <nav className="organism-navigation-menu__nav">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.href || `${item.id}`}
            className="organism-navigation-menu__item"
          >
            {item.icon && (
              <span className="organism-navigation-menu__icon">
                {item.icon}
              </span>
            )}
            <span className="organism-navigation-menu__label">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
      {footer && (
        <div className="organism-navigation-menu__footer">{footer}</div>
      )}
    </div>
  );
}
