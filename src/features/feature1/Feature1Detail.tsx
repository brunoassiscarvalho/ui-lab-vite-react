import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../components/atoms/Button/Button";
import { BodyText } from "../../components/atoms/BodyText/BodyText";
import { ComponentCard } from "../../components/organisms/ComponentCard/ComponentCard";
import { FeatureCardList } from "../../components/molecules/FeatureCardList/FeatureCardList";
import { featureCards, getFeatureCardById } from "./feature1Cards";

export default function Feature1Detail() {
  const [showSelection, setShowSelection] = useState(false);
  const navigate = useNavigate();
  const { cardId } = useParams<{ cardId: string }>();
  const card = getFeatureCardById(cardId);

  return (
    <section aria-label="Feature 1 detail page">
      {card ? (
        <>
          <ComponentCard title={card.title} description={card.description}>
            <BodyText>{card.body}</BodyText>
            <div style={{ display: "grid", gap: "1rem" }}>
              <Button
                variant="secondary"
                onClick={() => navigate("/dashboard/feature1")}
              >
                Back to cards
              </Button>
              <Button
                variant="secondary"
                onClick={() => setShowSelection((current) => !current)}
              >
                {showSelection ? "Hide contact list" : "Show contact list"}
              </Button>
            </div>
          </ComponentCard>

          {showSelection ? (
            <FeatureCardList
              cards={featureCards}
              selectedId={cardId}
              onSelect={(selectedId) =>
                navigate(`/dashboard/feature1/${selectedId}`)
              }
            />
          ) : null}
        </>
      ) : (
        <ComponentCard title="Card not found">
          <BodyText>We couldn’t find the requested feature card.</BodyText>
          <Button
            variant="secondary"
            onClick={() => navigate("/dashboard/feature1")}
          >
            Return to grid
          </Button>
        </ComponentCard>
      )}
    </section>
  );
}
