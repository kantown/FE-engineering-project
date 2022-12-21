import { SVGProps } from "react";

export const PersonIcon = ({ ...restProps }: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      opacity={0.431}
      d="M11.983 5.27a4.77 4.77 0 1 0-4.77 4.769 4.775 4.775 0 0 0 4.77-4.77Zm-4.77 3.917A3.917 3.917 0 1 1 9.985 8.04a3.922 3.922 0 0 1-2.77 1.15v-.003ZM4.374 10.443a.427.427 0 0 0-.56-.224 5.202 5.202 0 0 0-3.503 4.559v1.295a.426.426 0 0 0 .853 0v-1.295a4.372 4.372 0 0 1 2.986-3.776.427.427 0 0 0 .224-.56ZM10.614 10.218a.426.426 0 0 0-.335.783 4.371 4.371 0 0 1 2.986 3.776v1.295a.427.427 0 1 0 .853 0v-1.295a5.203 5.203 0 0 0-3.504-4.56Z"
      fill="currentColor"
      stroke="#888"
      strokeWidth={0.3}
    />
  </svg>
);
