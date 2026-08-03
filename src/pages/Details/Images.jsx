import React from "react";
import { Skeleton } from "@mui/material";

const Images = ({ product, images, isLoading }) => {
  return (
    <section>
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height="60vh" />
      ) : (
        <img
          src={images?.[0] || product?.images?.[0]}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
          width="100%"
          height="100%"
          alt={product?.name}
        />
      )}
    </section>
  );
};

export default Images;
