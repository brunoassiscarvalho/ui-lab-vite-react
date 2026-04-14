import { BodyText } from "../../atoms/BodyText/BodyText";
import { Eyebrow } from "../../atoms/Eyebrow/Eyebrow";

import "./card-header.css";

type CardHeaderProps = {
  title: string;
  description?: string;
};

export function CardHeader({ title, description }: CardHeaderProps) {
  return (
    <div className="molecule-card-header">
      <Eyebrow>Component</Eyebrow>
      <h2 className="molecule-card-header__title">{title}</h2>
      {description ? <BodyText>{description}</BodyText> : null}
    </div>
  );
}
