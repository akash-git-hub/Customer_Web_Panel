import React from "react";

const InProgressIcon = ({
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
        d="M9 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44001 10.9 3.20001L12.4 5.20001C12.78 5.70001 13 6 14 6H17C21 6 22 7 22 11V13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.76 18.3204C11.41 18.4904 11.41 21.8904 13.76 22.0604H19.32C19.99 22.0604 20.65 21.8104 21.14 21.3604C22.79 19.9204 21.91 17.0404 19.74 16.7704C18.96 12.0804 12.18 13.8604 13.78 18.3304"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InProgressIcon;
