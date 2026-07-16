import React from "react";

const Menu = ({ color }) => {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0.5H18" stroke={color} />
      <path d="M0 7.5H13" stroke={color} />
      <path d="M0 14.5H7.5" stroke={color} />
    </svg>
  );
};

export default Menu;
