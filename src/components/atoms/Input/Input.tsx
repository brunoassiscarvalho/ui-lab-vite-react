import "./input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  const inputClassName = ["atom-input", className].filter(Boolean).join(" ");

  return <input className={inputClassName} {...props} />;
}
