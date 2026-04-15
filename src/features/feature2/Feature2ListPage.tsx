import { useNavigate } from "react-router";
import { FeatureCardList } from "../../components/molecules/FeatureCardList/FeatureCardList";
import { featureCards } from "../feature1/feature1Cards";

export default function Feature2ListPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Feature 2 List Page</h1>
      <p>This is the list page for Feature 2.</p>

      <FeatureCardList
        cards={featureCards}
        onSelect={(selectedId) => navigate(`/dashboard/feature2/${selectedId}`)}
      />
    </div>
  );
}
