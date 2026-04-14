import type { ReactNode } from "react";

import "./app-document.css";

type AppDocumentProps = {
  children: ReactNode;
  head: ReactNode;
};

export function AppDocument({ children, head }: AppDocumentProps) {
  return (
    <html lang="en" className="template-app-document">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {head}
      </head>
      <body className="template-app-document__body">{children}</body>
    </html>
  );
}
