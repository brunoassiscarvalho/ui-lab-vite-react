import "./eyebrow.css";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  const eyebrowClassName = ["atom-eyebrow", className].filter(Boolean).join(" ");

  return <p className={eyebrowClassName}>{children}</p>;
}
