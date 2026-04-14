import { BodyText } from "../../atoms/BodyText/BodyText";

import "./error-state.css";

type ErrorStateProps = {
  message: string;
  details: string;
  stack?: string;
};

export function ErrorState({ message, details, stack }: ErrorStateProps) {
  return (
    <main className="organism-error-state">
      <div className="organism-error-state__panel">
        <p className="organism-error-state__status">{message}</p>
        <h1 className="organism-error-state__title">Something interrupted the app.</h1>
        <BodyText>{details}</BodyText>
        {stack ? (
          <pre className="organism-error-state__stack">
            <code>{stack}</code>
          </pre>
        ) : null}
      </div>
    </main>
  );
}
