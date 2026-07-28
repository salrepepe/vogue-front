import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";

import { useParams } from "react-router-dom";

import {
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,
} from "../../app/api/api";

import {} from "@mui/material";
import { useEffect, useState } from "react";

const OrderDetails = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useGetOrderByIdQuery(id);

  const [updateStatus] = useUpdateOrderStatusMutation();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (order) {
      setStatus(order.status);
    }
  }, [order]);

  if (isLoading) return "Загрузка...";

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
        }}
      >
        Заказ #{order.id.slice(-6)}
      </Typography>

      <Paper
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Typography variant="h5">Клиент</Typography>

        <Typography>{order.name}</Typography>

        <Typography>{order.phone}</Typography>

        <Typography>{order.address}</Typography>
      </Paper>

      <Paper
        sx={{
          p: 3,
        }}
      >
        <Typography variant="h5">Товары</Typography>

        {order.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              mt: 2,
            }}
          >
            <Typography>{item.product.name}</Typography>

            <Typography>Количество: {item.quantity}</Typography>

            <Typography>Цена: {item.price} $</Typography>

            {item.variant && (
              <Typography>
                Размер: {item.variant.size}
                <br />
                Цвет: {item.variant.color}
              </Typography>
            )}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}

        <Typography
          variant="h4"
          sx={{
            mt: 3,
          }}
        >
          Итого: {order.total} $
        </Typography>

        <Select
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="NEW">Новый</MenuItem>

          <MenuItem value="PROCESSING">В обработке</MenuItem>

          <MenuItem value="SHIPPED">Отправлен</MenuItem>

          <MenuItem value="COMPLETED">Завершен</MenuItem>

          <MenuItem value="CANCELLED">Отменен</MenuItem>
        </Select>

        <Button
          variant="contained"
          sx={{
            mt: 3,
          }}
          onClick={() => {
            updateStatus({
              id: order.id,
              status,
            });
          }}
        >
          Сохранить статус
        </Button>
      </Paper>
    </Box>
  );
};

export default OrderDetails;
