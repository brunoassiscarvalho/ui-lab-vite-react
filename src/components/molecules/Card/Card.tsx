import type { ReactNode } from "react";

import "./card.css";

type CardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, subtitle, children, className = "" }: CardProps) {
  const cardClassName = ["molecule-card", className].filter(Boolean).join(" ");

  return (
    <div className={cardClassName}>
      {(title || subtitle) && (
        <div className="molecule-card__header">
          {title && <h3 className="molecule-card__title">{title}</h3>}
          {subtitle && <p className="molecule-card__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="molecule-card__content">{children}</div>
    </div>
  );
}
