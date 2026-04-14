import { Input } from "../../atoms/Input/Input";

import "./form-field.css";

type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

export function FormField({
  label,
  helperText,
  className = "",
  id,
  ...props
}: FormFieldProps) {
  const inputId = id ?? props.name;
  const fieldClassName = ["molecule-form-field", className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={fieldClassName} htmlFor={inputId}>
      <span className="molecule-form-field__label">{label}</span>
      <Input id={inputId} {...props} />
      {helperText ? (
        <span className="molecule-form-field__helper">{helperText}</span>
      ) : null}
    </label>
  );
}
