import { useNavigate } from "react-router";
import { ComponentShowcase } from "../../components/organisms/ComponentShowcase/ComponentShowcase";
import { ShowcaseTemplate } from "../../components/templates/ShowcaseTemplate/ShowcaseTemplate";
import { Button } from "../../components/atoms/Button/Button";
import "./home-page.css";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <ShowcaseTemplate
      title="Simple reusable components for your app."
      description="This starter page is organized with atomic design and shows Button, Input, and Card patterns composed from atoms up to a page."
    >
      <div className="home-page__dashboard-button">
        <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
      </div>
      <ComponentShowcase />
    </ShowcaseTemplate>
  );
}
