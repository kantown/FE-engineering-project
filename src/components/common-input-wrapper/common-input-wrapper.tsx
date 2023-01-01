import { ReactNode } from "react";
import "./common-input-wrapper.scss";

interface CommonInputWrapperProps {
  children: ReactNode;
  className: string;
}

export const CommonInputWrapper = ({ children, className }: CommonInputWrapperProps) => {
  return <div className={`common-input-wrapper ${className}`}>{children}</div>;
};
