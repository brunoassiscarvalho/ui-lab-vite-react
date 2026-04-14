import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button/Button";
import { FeatureCardList } from "../../components/molecules/FeatureCardList/FeatureCardList";
import { featureCards } from "../feature1/feature1Cards";

export default function Feature2ListPage() {
  const [showSelection, setShowSelection] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Feature 2 List Page</h1>
      <p>This is the list page for Feature 2.</p>

      <FeatureCardList
        cards={featureCards}
        onSelect={(selectedId) => navigate(`/dashboard/feature1/${selectedId}`)}
      />
    </div>
  );
}
