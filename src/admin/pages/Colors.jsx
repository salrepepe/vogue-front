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
  useGetColorsQuery,
  useCreateColorMutation,
  useDeleteColorMutation,
} from "../../app/api/api";

const Colors = () => {
  const [name, setName] = useState("");
  const [hex, setHex] = useState("#000000");

  const { data: colors = [], isLoading } = useGetColorsQuery();

  const [createColor] = useCreateColorMutation();

  const [deleteColor] = useDeleteColorMutation();

  const addColor = async () => {
    if (!name.trim()) return;

    await createColor({
      name,
      hex,
    }).unwrap();

    setName("");
    setHex("#000000");
  };

  const remove = async (id) => {
    if (!window.confirm("Удалить цвет?")) return;

    await deleteColor(id);
  };

  if (isLoading) return "Загрузка...";

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Цвета
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
          alignItems: "center",
        }}
      >
        <TextField
          label="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="HEX"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />

        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />

        <Button variant="contained" onClick={addColor}>
          Добавить
        </Button>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        {colors.map((color) => (
          <Paper
            key={color.id}
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  bgcolor: color.hex,
                }}
              />

              <Typography>
                {color.name} ({color.hex})
              </Typography>
            </Box>

            <IconButton color="error" onClick={() => remove(color.id)}>
              🗑
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Colors;
