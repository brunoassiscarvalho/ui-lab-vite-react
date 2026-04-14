import { BodyText } from "../../atoms/BodyText/BodyText";
import { Button } from "../../atoms/Button/Button";
import { FormField } from "../../molecules/FormField/FormField";
import { ComponentCard } from "../ComponentCard/ComponentCard";

import "./component-showcase.css";

export function ComponentShowcase() {
  return (
    <section
      className="organism-component-showcase"
      aria-label="Component examples"
    >
      <ComponentCard
        title="Button"
        description="Two button variants you can reuse for primary and secondary actions."
      >
        <div className="organism-component-showcase__button-row">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
        </div>
      </ComponentCard>

      <ComponentCard
        title="Input"
        description="A labeled input with helper text for forms and settings screens."
      >
        <FormField
          name="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          helperText="We will only use this for product updates."
        />
      </ComponentCard>

      <ComponentCard
        title="Card"
        description="A flexible content container for grouping related information."
      >
        <BodyText>
          Cards work well for dashboards, profile summaries, pricing panels, and
          compact feature blocks.
        </BodyText>
        <Button variant="secondary">Learn more</Button>
      </ComponentCard>
    </section>
  );
}
