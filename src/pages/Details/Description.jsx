import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

import { useAddToCartMutation } from "../../app/api/api";
import { useNavigate } from "react-router-dom";

const Description = ({ t, product, isLoading, setImages }) => {
  const [added, setAdded] = useState(false);

  const [selectedVariant, setSelectedVariant] = useState({
    size: null,
    color: null,
  });

  const navigate = useNavigate();

  const sizes = product?.sizes || [];
  const colors = product?.colors || [];

  const [addToCart] = useAddToCartMutation();

  const handleChangeSize = (event) => {
    setSelectedVariant({
      ...selectedVariant,
      size: event.target.value,
    });
  };

  const handleColor = (color) => {
    setSelectedVariant({
      ...selectedVariant,
      color: color.id,
    });

    // меняем картинки
    setImages(color.images || []);
  };

  const handleAdd = async () => {
    await addToCart({
      productId: product.id,

      sizeId: selectedVariant.size,

      colorId: selectedVariant.color,

      quantity: 1,
    });

    setAdded(true);
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        product,

        sizeId: selectedVariant.size,

        colorId: selectedVariant.color,

        quantity: 1,

        buyNow: true,
      },
    });
  };

  return (
    <Box
      component="section"
      sx={{
        border: "1px solid #CCC",
        borderRadius: "4px",
        p: "28px 20px",
      }}
    >
      {isLoading ? (
        <Skeleton variant="text" />
      ) : (
        <Typography
          sx={{
            fontSize: 24,
            textAlign: "center",
          }}
        >
          {product?.name}
        </Typography>
      )}

      <Typography
        variant="h5"
        sx={{
          color: "#CCC",
          textAlign: "center",
          mb: 3,
        }}
      >
        {product?.brand?.name}
      </Typography>

      {sizes.length ? (
        <>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {t("product.currentSize")}
          </Typography>

          <FormControl fullWidth>
            <Select onChange={handleChangeSize}>
              {sizes.map((size) => (
                <MenuItem key={size.id} value={size.id}>
                  {size.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      ) : (
        ""
      )}

      {colors.length ? (
        <Typography
          variant="h4"
          sx={{
            mt: 3,
          }}
        >
          {t("product.currentColor")}
        </Typography>
      ) : (
        ""
      )}

      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        {colors.map((color) => (
          <Box
            key={color.id}
            onClick={() => handleColor(color)}
            sx={{
              width: 25,
              height: 25,

              borderRadius: "50%",

              backgroundColor: color.hex,

              cursor: "pointer",

              border:
                selectedVariant.color === color.id
                  ? "2px solid black"
                  : "1px solid #ccc",
            }}
          />
        ))}
      </Box>

      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: 3,
        }}
      >
        {product?.price}$
      </Typography>

      <Button
        fullWidth
        sx={{ mt: 3 }}
        variant={added ? "outlined" : "contained"}
        disabled={added}
        onClick={handleAdd}
      >
        {added ? t("cart.added") : t("product.add_to_cart")}
      </Button>

      <Button
        fullWidth
        sx={{ mt: 2 }}
        variant="contained"
        color="secondary"
        onClick={handleBuyNow}
      >
        {t("product.buy_now")}
      </Button>
      <Button
        href={`https://wa.me/996998150391?text=Здравсвуйте! хотелось узнать о товаре "${product?.name}"`}
        target="_blank"
        variant="outlined"
        sx={{ m: "16px 0 0" }}
        color="primary"
        fullWidth
      >
        {" "}
        {t("product.learnMore")}{" "}
      </Button>
    </Box>
  );
};

export default Description;
