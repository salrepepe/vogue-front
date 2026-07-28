import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import { useGetOrdersQuery } from "../../app/api/api";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { data: orders = [], isLoading } = useGetOrdersQuery();
  const navigate = useNavigate();
  if (isLoading) return "Загрузка...";

  return (
    <>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Заказы
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>

              <TableCell>Клиент</TableCell>

              <TableCell>Телефон</TableCell>

              <TableCell>Сумма</TableCell>

              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={order.id}
                hover
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/admin/orders/${order.id}`);
                }}
              >
                <TableCell>#{index + 1}</TableCell>

                <TableCell>{order.name}</TableCell>

                <TableCell>{order.phone}</TableCell>

                <TableCell>{order.total} $</TableCell>

                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Orders;
