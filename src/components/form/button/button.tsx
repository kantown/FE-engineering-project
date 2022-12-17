import { ButtonHTMLAttributes } from "react";
import "./button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...restProps }: ButtonProps) => {
  return (
    <button {...restProps} className="form-button">
      {text}
    </button>
  );
};
