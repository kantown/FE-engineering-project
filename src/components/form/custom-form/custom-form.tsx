import { FormEvent, ReactNode } from "react";
import "./custom-form.scss";

interface CustomFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  submitButton: ReactNode;
}

export const CustomFrom = ({ onSubmit, children, submitButton }: CustomFormProps) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__container">{children}</div>
      {submitButton}
    </form>
  );
};
