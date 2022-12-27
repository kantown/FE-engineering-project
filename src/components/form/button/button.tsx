import { ButtonHTMLAttributes } from "react";
import "./button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, className, ...restProps }: ButtonProps) => {
  return (
    <button {...restProps} className={`form-button ${className}`}>
      {text}
    </button>
  );
};
