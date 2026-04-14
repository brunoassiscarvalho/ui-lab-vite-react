import "./body-text.css";

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function BodyText({ children, className = "" }: BodyTextProps) {
  const textClassName = ["atom-body-text", className].filter(Boolean).join(" ");

  return <p className={textClassName}>{children}</p>;
}
