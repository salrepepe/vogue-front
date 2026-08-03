import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
} from "@mui/material";

import {
  useGetSizesQuery,
  useCreateSizeMutation,
  useDeleteSizeMutation,
} from "../../app/api/api";

const Sizes = () => {
  const [name, setName] = useState("");

  const { data: sizes = [], isLoading } = useGetSizesQuery();

  const [createSize] = useCreateSizeMutation();

  const [deleteSize] = useDeleteSizeMutation();

  const addSize = async () => {
    if (!name.trim()) return;

    try {
      await createSize({
        name,
      }).unwrap();

      setName("");
    } catch (e) {
      console.log(e);
    }
  };

  const remove = async (id) => {
    if (!window.confirm("Удалить размер?")) return;

    await deleteSize(id);
  };

  if (isLoading) return "Загрузка...";

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
        }}
      >
        Размеры
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
        }}
      >
        <TextField
          label="Размер"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button variant="contained" onClick={addSize}>
          Добавить
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        {sizes.map((size) => (
          <Paper
            key={size.id}
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>{size.name}</Typography>

            <IconButton color="error" onClick={() => remove(size.id)}>
              🗑
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Sizes;
