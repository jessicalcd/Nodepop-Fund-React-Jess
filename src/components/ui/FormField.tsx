import type { ComponentProps } from "react";
import "./FormField.css";

// NOTE: ComponentProps
interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
}

const FormField = ({ label, ...props }: FormFieldProps) => {
  return (
    <div className="form-field">
      <label className="form-field-label">
        <span>{label}</span>
        <input className="form-field-input" autoComplete="off" {...props} />
      </label>
    </div>
  );
};

export default FormField;