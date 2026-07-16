import React from "react";

const Cart = ({color}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 5C7 3.67392 7.52678 2.40215 8.46447 1.46447C9.40215 0.526784 10.6739 0 12 0C13.3261 0 14.5979 0.526784 15.5355 1.46447C16.4732 2.40215 17 3.67392 17 5V7H21L24 24H0L3 7H7V5ZM8 7H16V5C16 3.93913 15.5786 2.92172 14.8284 2.17157C14.0783 1.42143 13.0609 1 12 1C10.9391 1 9.92172 1.42143 9.17157 2.17157C8.42143 2.92172 8 3.93913 8 5V7ZM3.821 8H20.162L22.82 23H1.208L3.821 8Z"
        fill={color}
      />
    </svg>
  );
};

export default Cart;
