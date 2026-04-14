import "./button.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const buttonClassName = ["atom-button", `atom-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={buttonClassName} {...props} />;
}
