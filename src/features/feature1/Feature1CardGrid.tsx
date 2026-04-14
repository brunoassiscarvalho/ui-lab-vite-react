import { useNavigate } from "react-router";
import { BodyText } from "../../components/atoms/BodyText/BodyText";
import { Button } from "../../components/atoms/Button/Button";
import { ComponentCard } from "../../components/organisms/ComponentCard/ComponentCard";
import { ContentGrid } from "../../components/organisms/ContentGrid/ContentGrid";
import { featureCards } from "./feature1Cards";

export default function Feature1CardGrid() {
  const navigate = useNavigate();

  return (
    <section aria-label="Feature 1 card grid">
      <ContentGrid columns={4} gap="lg">
        {featureCards.map((card) => (
          <ComponentCard
            key={card.id}
            title={card.title}
            description={card.description}
          >
            <BodyText>{card.body}</BodyText>
            <Button
              variant={card.actionVariant}
              onClick={() => navigate(`/dashboard/feature1/${card.id}`)}
            >
              {card.actionLabel}
            </Button>
          </ComponentCard>
        ))}
      </ContentGrid>
    </section>
  );
}
