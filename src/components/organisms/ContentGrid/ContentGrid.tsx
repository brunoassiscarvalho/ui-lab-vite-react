import type { ReactNode } from "react";

import "./content-grid.css";

type ContentGridProps = Readonly<{
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}>;

export function ContentGrid({
  columns = 4,
  gap = "md",
  className = "",
  children,
}: ContentGridProps) {
  const gridClassName = [
    "organism-content-grid",
    `organism-content-grid--cols-${columns}`,
    `organism-content-grid--gap-${gap}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const minColumnWidthMap = {
    1: "min(100%, 24rem)",
    2: "min(100%, 20rem)",
    3: "min(100%, 18rem)",
    4: "min(100%, 16rem)",
  } as const;

  const minColumnWidth = minColumnWidthMap[columns];

  return (
    <div
      className={gridClassName}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}
