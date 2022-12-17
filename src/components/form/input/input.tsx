import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import "./input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

export const Input = ({ inputClassName, ...restProps }: InputProps) => {
  return <input className={clsx("input", inputClassName)} {...restProps} />;
};
