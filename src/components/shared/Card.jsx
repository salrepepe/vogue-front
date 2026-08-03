import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAddToCartMutation } from "../../app/api/api";
import { useState } from "react";

const Card = ({ item }) => {
  const [added, setAdded] = useState(false);

  const [addToCart] = useAddToCartMutation();

  const handleAdd = () => {
    addToCart({
      productId: item.id,
      quantity: 1,
    });
    setAdded(true);
  };

  return (
    <Box
      sx={{
        p: { xs: "5px", md: "10px" },
        borderRadius: "10px",
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& a": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "100%",
        },
        "& img": { borderRadius: "10px", objectFit: "cover" },
      }}
    >
      <Link to={`/catalog/${item.slug}/${item.id}`}>
        <Box
          component="img"
          src={item?.images[0]}
          sx={{
            height: { xs: "153px", md: "280px" },
          }}
          width="100%"
          alt=""
        />
      </Link>
      <Link to={`/catalog/${item.slug}/${item.id}`}>
        {" "}
        <Typography
          sx={{ mt: { xs: 2, md: 3 }, textAlign: "center" }}
          variant="h4"
        >
          {item?.name}
        </Typography>
        <Typography sx={{ color: "#777" }} variant="h5">
          {item?.category?.name}
        </Typography>
        <Typography
          sx={{ mb: { xs: 2, md: 4 }, mt: 1, fontSize: { xs: 14, md: 20 } }}
        >
          {item?.price}$
        </Typography>
      </Link>

      <Button
        fullWidth
        sx={{ p: 1, fontSize: 17 }}
        size="small"
        variant={added ? "outlined" : "contained"}
        onClick={handleAdd}
        disabled={added}
      >
        {added ? "Добавлено" : "добавить в корзину"}
      </Button>
    </Box>
  );
};

export default Card;
