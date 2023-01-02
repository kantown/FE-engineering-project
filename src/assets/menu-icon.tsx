import { SVGProps } from "react";

 export const MenuIcon = ({...restProps}: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...restProps}
  >
    <path fill="url(#a)" d="M0 0h19v35H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.0036 0 0 .00195 -.421 0)" />
      </pattern>
      <image
        id="b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)