import { Link } from "react-router";

import { BodyText } from "../../atoms/BodyText/BodyText";
import { Button } from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";

import "./app-header.css";

export function AppHeader() {
  return (
    <header className="organism-app-header">
      <Link to="/" className="organism-app-header__brand">
        <span className="organism-app-header__brand-mark">
          <Icon name="grid" />
        </span>
        <span className="organism-app-header__brand-copy">
          <strong>UI Lab</strong>
          <BodyText className="organism-app-header__brand-text">
            Atomic workspace demo
          </BodyText>
        </span>
      </Link>
      <Button variant="secondary">New feature</Button>
    </header>
  );
}
