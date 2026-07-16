import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAddToCartMutation } from "../../app/api/api";
import { useNavigate } from "react-router-dom";

const Description = ({ t, product, isLoading }) => {
  const [added, setAdded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState({});

  const navigate = useNavigate();

  const sizes = [
    ...new Set(product?.variants?.map((v) => ({ name: v.size, id: v.id }))),
  ];
  const colors = [
    ...new Set(product?.variants?.map((v) => ({ name: v.color, id: v.id }))),
  ];

  const [addToCart] = useAddToCartMutation();

  const handleChangeSize = (event) => {
    setSelectedVariant({ ...selectedVariant, size: event.target.value });
  };
  const handleChangeColor = (event) => {
    setSelectedVariant({ ...selectedVariant, color: event.target.value });
  };

  const handleAdd = () => {
    addToCart({
      productId: product.id,
      variantId: selectedVariant.size,
      quantity: 1,
    });
    setAdded(true);
  };

  return (
    <Box
      component="section"
      sx={{
        borderRadius: "4px",
        border: "1px solid #CCC",
        p: "28px 20px",
        "& .MuiSelect-select": {
          minHeight: "unset",
          p: 1,
          borderRadius: "4px",
        },
        "& .MuiInputBase-root": {
          borderRadius: "4px",
        },
      }}
    >
      {isLoading ? (
        <>
          <Skeleton
            sx={{ m: "0 auto", fontSize: "24px" }}
            variant="text"
            width={100}
          />{" "}
          <Skeleton
            sx={{ m: "0 auto", fontSize: "24px" }}
            variant="text"
            width={100}
          />
        </>
      ) : (
        <Typography sx={{ fontSize: 24, textAlign: "center" }}>
          {product?.name}
        </Typography>
      )}

      {isLoading ? (
        <Skeleton
          sx={{ m: "0 auto", fontSize: 24 }}
          variant="text"
          width="80%"
        />
      ) : (
        <Typography
          variant="h5"
          sx={{
            color: "#CCC",
            maxWidth: 134,
            m: "0 auto 24px",
            textAlign: "center",
          }}
        >
          {product?.brand?.name}
        </Typography>
      )}

      <Typography variant="h4" sx={{ mb: 1 }}>
        {t("product.currentSize")}
      </Typography>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-">{</InputLabel> */}
        <Select onChange={handleChangeSize}>
          {sizes.map((size) => (
            <MenuItem key={size.name} value={size.id}>
              {size.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h4" sx={{ m: "24px 0 8px" }}>
        {t("product.currentColor")}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{product?.color}</InputLabel>

        <Select onChange={handleChangeColor}>
          {colors.map((color) => (
            <MenuItem key={color.name} value={color.id}>
              {color.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography
        sx={{
          color: "#CCC",
          mt: 5,
          textAlign: "center",
        }}
        variant="h5"
      >
        {t("product.price")}
      </Typography>
      <Typography variant="h3" sx={{ textAlign: "center", mt: 1 }}>
        {isLoading ? 0 : product?.price}$
      </Typography>
      <Button
        variant={added ? "outlined" : "contained"}
        onClick={handleAdd}
        disabled={added}
        sx={{ mt: "24px" }}
        size="large"
        fullWidth
      >
        {added ? "Добавлено" : t("product.add_to_cart")}
      </Button>
      {/* <Button
        variant="contained"
        sx={{ m: "16px 0 16px" }}
        size="large"
        color="secondary"
        fullWidth
        onClick={() => {
          handleAdd()
          navigate("/checkout");
        }}
      >
        {t("product.buy_now")}
      </Button> */}
      <Button
        variant="outlined"
        sx={{ m: "16px 0 0" }}
        size="large"
        color="primary"
        fullWidth
      >
        {t("product.learnMore")}
      </Button>
    </Box>
  );
};

export default Description;
