import { Box, IconButton, Typography } from "@mui/material";
import { memo } from "react";

import {
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} from "../../../app/api/api";

const CartItem = memo(function CartItem({ idx, item, checkout }) {
  const [updateCartItem] = useUpdateCartItemMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  const changeQuantity = (item, quantity) => {
    if (quantity < 1) return;

    updateCartItem({
      id: item.id,
      quantity,
    });
  };
  return (
    <Box key={idx} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <img
          src={item?.product?.images[0]}
          width={56}
          height={56}
          style={{
            objectFit: "contain",
            borderRadius: 4,
            marginRight: 20,
          }}
          alt=""
        />
        <div>
          <Typography
            variant="h4"
            sx={{
              maxWidth: "277px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item?.product?.name}
          </Typography>
          <Typography sx={{ color: "#777" }} variant="h6">
            {item?.product?.brand.name}
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
            }}
          >
            <IconButton
              disabled={checkout || item.quantity === 1}
              onClick={() => changeQuantity(item, item.quantity - 1)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="#F2F2F2" />
                <path d="M17.32 14.6H10V13H17.32V14.6Z" fill="black" />
              </svg>
            </IconButton>

            {item?.quantity}
            <IconButton
              disabled={checkout}
              onClick={() => changeQuantity(item, item.quantity + 1)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="#F2F2F2" />
                <path
                  d="M15.12 13.54H18.62V15.04H15.12V18.6H13.5V15.04H10V13.54H13.5V10H15.12V13.54Z"
                  fill="black"
                />
              </svg>
            </IconButton>
          </Box>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Typography sx={{ fontSize: 18, ml: 2 }}>
          {item?.product?.price * item.quantity} $
        </Typography>
        {!checkout && (
          <IconButton onClick={() => removeCartItem(item.id)}>🗑</IconButton>
        )}
      </Box>
    </Box>
  );
});

export default CartItem;
