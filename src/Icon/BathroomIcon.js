import React from "react";

const BathroomIcon = ({
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
        d="M21 13V16C21 17.0609 20.5786 18.0783 19.8284 18.8284C19.0783 19.5786 18.0609 20 17 20H7C5.93913 20 4.92172 19.5786 4.17157 18.8284C3.42143 18.0783 3 17.0609 3 16V13.6C3 13.4409 3.06321 13.2883 3.17574 13.1757C3.28826 13.0632 3.44087 13 3.6 13H21ZM21 13V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3H12M16 20L17 22M8 20L7 22"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4 8H8.6C8.269 8 8.004 7.732 8.04 7.402C8.186 6.075 8.863 3 12 3C15.137 3 15.814 6.075 15.96 7.402C15.996 7.732 15.731 8 15.4 8Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BathroomIcon;
