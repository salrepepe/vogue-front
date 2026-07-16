import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import React from "react";
import { useClearCartMutation, useGetCartQuery } from "../../../app/api/api";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = ({ open, setOpen, t }) => {
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const { data: cart, isLoading } = useGetCartQuery(undefined, {
    skip: !open,
  });

  const [clearCart] = useClearCartMutation();
  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          p: "25px",
          minWidth: 380,
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "54px",
          justifyContent: "space-between",
        }}
      >
        {cart?.count ? <p></p> : ""}
        <Typography variant="h4">{t("nav.cart")}</Typography>
        {cart?.count ? (
          <Box
            sx={{
              position: "relative",

              "&:hover .text": {
                opacity: 1,
                // transform: "translateY(0)",
              },
            }}
          >
            <IconButton onClick={() => clearCart()}>
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.75 7.75L15.755 19.096C15.6736 19.5594 15.4315 19.9792 15.0712 20.2817C14.7109 20.5842 14.2555 20.75 13.785 20.75H5.715C5.24454 20.75 4.78913 20.5842 4.42882 20.2817C4.06852 19.9792 3.82639 19.5594 3.745 19.096L1.75 7.75M18.75 4.75H13.125M13.125 4.75V2.75C13.125 2.21957 12.9143 1.71086 12.5392 1.33579C12.1641 0.960714 11.6554 0.75 11.125 0.75H8.375C7.84457 0.75 7.33586 0.960714 6.96079 1.33579C6.58571 1.71086 6.375 2.21957 6.375 2.75V4.75M13.125 4.75H6.375M0.75 4.75H6.375"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
            <Typography
              className="text"
              variant="h6"
              sx={{
                position: "absolute",
                top: 25,
                left: "50%",
                transform: "translate(-50%, 10px)",
                opacity: 0,
                transition: ".3s",
                color: "#FF0000",
                fontWeight: 400,
                width: "100px",
              }}
            >
              {t("cart.clear")}
            </Typography>
          </Box>
        ) : (
          ""
        )}
      </Box>

      {!cart?.count ? (
        <Typography sx={{ textAlign: "center" }}>
          Ваша корзина пуста :(
        </Typography>
      ) : (
        <>
          {" "}
          <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2.5 }}>
            {cart?.items.map((item, idx) => (
              <CartItem item={item} idx={idx} />
            ))}
          </Box>
          <Typography
            variant="h5"
            sx={{ color: "#777", mt: 5, textAlign: "center" }}
          >
            {t("cart.total")}
          </Typography>
          <Typography sx={{ mt: 1.2, textAlign: "center" }} variant="h3">
            $ {cart?.total}
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(false);
              navigate("/checkout");
            }}
            sx={{ m: "24px 0  0" }}
            size="large"
            color="primary"
            fullWidth
          >
            {t("checkout.place_order")}
          </Button>
        </>
      )}
    </Dialog>
  );
};

export default Cart;
