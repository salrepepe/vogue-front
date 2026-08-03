import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddToCartMutation } from "../../app/api/api";

const Card = ({ item }) => {
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const [addToCart] = useAddToCartMutation();

  const images = item?.images?.slice(0, 8) || [];

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
      }}
    >
      <Link to={`/catalog/${item.slug}/${item.id}`}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: 153,
              md: 280,
            },
            overflow: "hidden",
          }}
          onMouseLeave={() => setActiveImage(0)}
        >
          <Box
            component="img"
            src={images[activeImage] || images[0]}
            alt={item.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              userSelect: "none",
            }}
          />

          {/* Зоны наведения */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              zIndex: 2,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                onMouseEnter={() => setActiveImage(index)}
                sx={{
                  flex: 1,
                }}
              />
            ))}
          </Box>

          {/* Индикаторы */}
          {images.length > 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                right: 8,
                display: "flex",
                gap: 0.5,
                zIndex: 3,
              }}
            >
              {images.map((_, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => setActiveImage(index)}
                  sx={{
                    flex: 1,
                    height: 3,
                    borderRadius: 999,
                    cursor: "pointer",
                    transition: "all .2s ease",
                    backgroundColor:
                      activeImage === index
                        ? "#fff"
                        : "rgba(255,255,255,.45)",
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </Link>

      <Box sx={{ p: "10px", width: "100%" }}>
        <Link to={`/catalog/${item.slug}/${item.id}`}>
          <Typography
            variant="h4"
            sx={{
              mt: { xs: 2, md: 3 },
              textAlign: "center",
            }}
          >
            {item.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#777",
            }}
          >
            {item.category?.name}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              mb: { xs: 2, md: 4 },
              fontSize: { xs: 14, md: 20 },
            }}
          >
            {item.price}$
          </Typography>
        </Link>

        <Button
          fullWidth
          variant={added ? "outlined" : "contained"}
          disabled={added}
          onClick={handleAdd}
          sx={{
            p: 1,
            fontSize: 17,
            borderRadius: 0,
          }}
        >
          {added ? "Добавлено" : "Добавить в корзину"}
        </Button>
      </Box>
    </Box>
  );
};

export default Card;