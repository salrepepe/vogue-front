import React from "react";

const Search = ({ color }) => {
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7.5" stroke={color} />
      <path d="M13.5 13L18 16.5" stroke={color} />
    </svg>
  );
};

export default Search;
