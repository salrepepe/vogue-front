import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import CartItem from "../../components/layout/Cart/CartItem";
import { useGetCartQuery, useCreateOrderMutation } from "../../app/api/api";

const Checkout = ({ t }) => {
  const md = useMediaQuery("(min-width:768px)");

  const { data: cart, isLoading, refetch } = useGetCartQuery();

  const [createOrder, { isLoading: isCreating }] = useCreateOrderMutation();

  const [success, setSuccess] = useState(false);

  const schema = yup.object({
    name: yup.string().required("Введите имя"),

    lastName: yup.string().required("Введите фамилию"),

    phone: yup.string().required("Введите телефон"),

    address: yup.string().required("Введите адрес"),
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
      await createOrder({
        ...data,

        total: cart.total,
      }).unwrap();

      setSuccess(true);

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (success) {
    return (
      <Box component="section">
        <Container>
          <Box
            sx={{
              textAlign: "center",
              mt: 10,
            }}
          >
            <Typography variant="h2">✅ {t("checkout.success")}</Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#777",
              }}
            >
              {t("checkout.managerContact")}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box component="section">
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
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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

                  <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
                    {t("checkout.address")}
                  </Typography>

                  <TextField
                    fullWidth
                    {...register("address")}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Box>

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
                </Box>
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
            </Box>
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
              {cart?.items?.map((item, idx) => (
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
                $ {cart?.total}
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
                onClick={handleSubmit(onSubmit)}
                variant="contained"
                size="large"
                fullWidth
                disabled={isCreating}
              >
                {isCreating ? "Отправка..." : t("checkout.confirmOrder")}
              </Button>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
