import { ReactNode } from "react";
import "./label-input.scss";

interface LabelInputProps {
  label: string;
  children: ReactNode;
}

export const LabelInput = ({ label, children }: LabelInputProps) => {
  return (
    <div className="label-input">
      <span className="label-input__label">{label}</span>
      <>{children}</>
    </div>
  );
};
