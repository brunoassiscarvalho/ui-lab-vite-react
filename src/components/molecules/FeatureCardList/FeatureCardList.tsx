import { BodyText } from "../../atoms/BodyText/BodyText";

import "./feature-card-list.css";

type FeatureCardListItem = {
  id: string;
  title: string;
  description: string;
};

type FeatureCardListProps = Readonly<{
  cards: FeatureCardListItem[];
  selectedId?: string;
  onSelect: (id: string) => void;
}>;

function getAvatarLabel(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function FeatureCardList({
  cards,
  selectedId,
  onSelect,
}: FeatureCardListProps) {
  return (
    <ul className="molecule-feature-card-list">
      {cards.map((card) => (
        <li key={card.id}>
          <button
            type="button"
            className={`molecule-feature-card-list__item ${
              card.id === selectedId ? "is-selected" : ""
            }`}
            onClick={() => onSelect(card.id)}
          >
            <div className="molecule-feature-card-list__avatar">
              {getAvatarLabel(card.title)}
            </div>
            <div className="molecule-feature-card-list__details">
              <span className="molecule-feature-card-list__title">
                {card.title}
              </span>
              <BodyText>{card.description}</BodyText>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}
