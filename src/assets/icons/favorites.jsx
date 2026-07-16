import React from "react";

const Favorites = ({ color }) => {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.500001C2.9625 0.500001 0.5 3.00647 0.5 6.0982C0.5 11.6964 7 16.7857 10.5 17.9694C14 16.7857 20.5 11.6964 20.5 6.0982C20.5 3.00647 18.0375 0.500001 15 0.500001C13.14 0.500001 11.495 1.43999 10.5 2.87873C9.99275 2.14352 9.31897 1.54351 8.53568 1.12945C7.75238 0.715401 6.88263 0.499493 6 0.500001Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Favorites;
