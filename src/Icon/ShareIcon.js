import React from "react";

const ShareIcon = ({
  size = 24,
  color = "#161103",
  strokeWidth = 1.5,
  className = "",
  style = {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M3.04001 17.84L4.67001 18.39C5.12001 18.54 5.48001 18.89 5.63001 19.35L6.18001 20.98C6.65001 22.39 8.63001 22.36 9.07001 20.95L10.92 15C11.28 13.82 10.19 12.72 9.02001 13.09L3.06001 14.94C1.66001 15.38 1.64001 17.37 3.04001 17.84Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;
