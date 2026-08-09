import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import CartItem from "../../components/layout/Cart/CartItem";
import {
  useGetCartQuery,
  useCreateOrderMutation,
  useCreateDirectOrderMutation,
} from "../../app/api/api";

const Checkout = ({ t }) => {
  const md = useMediaQuery("(min-width:768px)");

  const navigate = useNavigate();

  const { state } = useLocation();

  const buyNow = state?.product;

  const { data: cart, refetch } = useGetCartQuery(undefined, {
    skip: !!buyNow,
  });

  const [createOrder, { isLoading: isCreating }] = useCreateOrderMutation();
  const [createDirectOrder, { isLoading: isDirectCreating }] =
    useCreateDirectOrderMutation();
  const [successOrder, setSuccessOrder] = useState(null);
  const schema = yup.object({
    name: yup.string().required("Введите имя"),
    phone: yup.string().required("Введите телефон"),
    // lastName: yup.string().required("Введите фамилию"),
    // address: yup.string().required("Введите адрес"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      let order;

      if (buyNow) {
        order = await createDirectOrder({
          productId: state.product.id,
          sizeId: state.sizeId,
          colorId: state.colorId,
          quantity: state.quantity,
          ...data,
        }).unwrap();
      } else {
        order = await createOrder({
          ...data,
          total,
        }).unwrap();

        refetch();
      }

      setSuccessOrder(order);
    } catch (error) {
      console.log(error);
    }
  };

  if (successOrder) {
    return (
      <Box
        component="section"
        sx={{
          pt: "140px",
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: "center",
              mt: 10,
            }}
          >
            <Typography sx={{ fontSize: "60px", fontWeight: "Bold" }}>
              СПАСИБО!
            </Typography>
            <Typography sx={{ fontSize: "24px", fontWeight: "medium" }}>
              Ваш заказ в обработке
            </Typography>
            <Typography
              sx={{ fontSize: "24px", mt: "40px", fontWeight: "medium" }}
            >
              Номер заказа
            </Typography>

            <Box
              sx={{
                p: "17px 40px",
                background: "#000",
                borderRadius: "20px",
                color: "#FFF",
                width: "fit-content",
                m: "0 auto",
              }}
            >
              <span style={{ fontSize: "50px" }}>
                #{successOrder.id.slice(-6)}
              </span>
            </Box>
            <Typography
              sx={{
                mt: 3,
                color: "#FF6200",
                fontSize: "24px",
                mb: 8,
              }}
            >
              Сделайте скриншот или запишите номер заказа!
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/")}
              color="primary"
              size="large"
            >
              Закрыть
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }
  const items = buyNow
    ? [
        {
          id: "buy-now",
          product: buyNow,
          quantity: state.quantity,
          size: buyNow.sizes.find((s) => s.id === state.sizeId),
          color: buyNow.colors.find((c) => c.id === state.colorId),
        },
      ]
    : cart?.items || [];

  const total = buyNow ? buyNow.price * state.quantity : cart?.total || 0;

  return (
    <>
      {isDirectCreating ||
        (isCreating && (
          <LinearProgress aria-label="Loading…" variant="query" />
        ))}
      <Box component="section" sx={{ mt: "140px" }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Typography
              sx={{
                m: { xs: "30px 0", md: "40px 0" },
                fontSize: { xs: 16, md: 30 },
                textAlign: "center",
              }}
            >
              {t("checkout.title")}
            </Typography>

            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                mb: { xs: 2, md: 3 },
              }}
            >
              {t("checkout.fillFields")}
            </Typography>

            <Grid container spacing={{ xs: 0, md: 10 }}>
              {/* FORM */}

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    columnGap: "20px",
                    rowGap: "26px",
                  }}
                >
                  <Box width="50%">
                    <Typography variant="h5">{t("checkout.name")}</Typography>

                    <TextField
                      fullWidth
                      {...register("name")}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />

                    <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                      {t("checkout.phone")}
                    </Typography>

                    <TextField
                      fullWidth
                      {...register("phone")}
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />

                    {/* <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                    {t("checkout.address")}
                  </Typography>

                  <TextField
                    fullWidth
                    {...register("address")}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  /> */}
                  </Box>
                  {/* 
                <Box width="50%">
                  <Typography variant="h5">{t("checkout.lastName")}</Typography>

                  <TextField
                    fullWidth
                    {...register("lastName")}
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />

                  <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                    e-mail*
                  </Typography>

                  <TextField fullWidth />

                  <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                    WhatsApp/Telegram
                  </Typography>

                  <TextField fullWidth />
                </Box> */}
                </Box>

                {md && (
                  <>
                    <Typography
                      sx={{
                        color: "#777",
                        textTransform: "uppercase",
                        mt: 6,
                        mb: 2,
                      }}
                    >
                      {t("checkout.checkData")}
                    </Typography>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isCreating}
                    >
                      {isCreating ? "Отправка..." : t("checkout.confirmOrder")}
                    </Button>
                  </>
                )}
              </Grid>

              {/* CART */}

              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    p: 3,
                    mt: { xs: 4, md: 0 },
                    border: "1px solid #CCC",
                    borderRadius: 2,
                  }}
                >
                  {items.map((item, idx) => (
                    <CartItem checkout item={item} idx={idx} key={item.id} />
                  ))}

                  <Typography
                    variant="h5"
                    sx={{
                      color: "#777",
                      mt: 5,
                      textAlign: "center",
                    }}
                  >
                    {t("cart.total")}
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    $ {total}
                  </Typography>
                </Box>
              </Grid>
              {!md && (
                <>
                  <Typography
                    sx={{
                      color: "#777",
                      textTransform: "uppercase",
                      mt: 6,
                      mb: 2,
                    }}
                  >
                    {t("checkout.checkData")}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    fullWidth
                    disabled={isCreating || isDirectCreating}
                  >
                    {isCreating || isDirectCreating
                      ? "Отправка..."
                      : t("checkout.confirmOrder")}
                  </Button>
                </>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
