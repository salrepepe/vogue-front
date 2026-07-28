import { Box, Grid, Paper, Typography } from "@mui/material";
import { useGetDashboardQuery } from "../../app/api/api";

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardQuery();
  if (isLoading) return "Загрузка...";
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontWeight: 700,
        }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={3}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
              }}
            >
              📦
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 2,
              }}
            >
              Заказы
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {data?.orders}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={3}>
          {" "}
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
              }}
            >
              💰
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 2,
              }}
            >
              Выручка
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {data?.revenue}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={3}>
          {" "}
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
              }}
            >
              🛍
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 2,
              }}
            >
              Товары
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {data?.products}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={3}>
          {" "}
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
              }}
            >
              🏷
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 2,
              }}
            >
              Бренды
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: 700,
              }}
            >
              {data?.brands}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
