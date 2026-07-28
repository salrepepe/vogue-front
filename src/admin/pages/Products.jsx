import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";

import {
  useGetAdminProductsQuery,
  useDeleteProductMutation,
} from "../../app/api/api";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data: products = [], isLoading } = useGetAdminProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();

  if (isLoading) return "Загрузка...";

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
        }}
      >
        Товары
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/admin/products/create")}
        sx={{
          mb: 3,
        }}
      >
        Добавить товар
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>

              <TableCell>Бренд</TableCell>

              <TableCell>Категория</TableCell>

              <TableCell>Цена</TableCell>

              <TableCell>Варианты</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>

                <TableCell>{product.brand?.name}</TableCell>

                <TableCell>{product.category?.name}</TableCell>

                <TableCell>{product.price} $</TableCell>

                <TableCell>{product.variants.length}</TableCell>
                <TableCell>
                  {" "}
                  <IconButton
                    color="error"
                    onClick={() => deleteProduct(product.id)}
                  >
                    🗑
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;
