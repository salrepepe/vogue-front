import React from "react";
import img from "../../assets/images/product.png";
import Filter from "../Catalog/Filter";
import { Box, Skeleton } from "@mui/material";

const Images = ({ t, product, isLoading }) => {
  return (
    <section>
      {isLoading ? (
        <Skeleton variant="rectengular" width="50vw" height="60vh" />
      ) : (
        <img
          src={product?.images[0]}
          style={{ objectFit: "cover", borderRadius: "10px" }}
          width="100%"
          height='100%'
          alt=""
        />
      )}
    </section>
  );
};

export default Images;
