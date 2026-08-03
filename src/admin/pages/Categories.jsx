import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} from "../../app/api/api";

const Categories = () => {
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");

  const { data: categories = [], isLoading } = useGetCategoriesQuery();

  const [createCategory] = useCreateCategoryMutation();

  const [deleteCategory] = useDeleteCategoryMutation();

  const addCategory = async (event) => {
    event.preventDefault();
    if (!name.trim()) return;

    try {
      await createCategory({
        name,

        parentId: parentId || null,
      }).unwrap();

      setName("");

      // setParentId("");
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return "Загрузка...";

  const CategoryItem = ({ category, deleteCategory }) => {
    const hasChildren = category.children?.length > 0;

    if (!hasChildren) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 2,
            mb: 1,
          }}
        >
          <Typography>{category.name}</Typography>

          <IconButton color="error" onClick={() => deleteCategory(category.id)}>
            🗑
          </IconButton>
        </Box>
      );
    }

    return (
      <Accordion
        disableGutters
        elevation={0}
        sx={{
          mb: 1,
          border: "1px solid #ddd",
          borderRadius: 2,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pr: 2,
            }}
          >
            <Typography fontWeight={600}>{category.name}</Typography>

            <IconButton
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                deleteCategory(category.id);
              }}
            >
              🗑
            </IconButton>
          </Box>
        </AccordionSummary>

        <AccordionDetails sx={{ pl: 2 }}>
          {category.children.map((child) => (
            <CategoryItem
              key={child.id}
              category={child}
              deleteCategory={deleteCategory}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    );
  };

  const renderCategories = (categories, level = 0) => {
    return categories.flatMap((category) => [
      <MenuItem key={category.id} value={category.id}>
        {"— ".repeat(level)}
        {category.name}
      </MenuItem>,

      ...(category.children?.length
        ? renderCategories(category.children, level + 1)
        : []),
    ]);
  };
  return (
    <Box>
      <Typography variant="h3">Категории</Typography>

      <Box
        component="form"
        onSubmit={addCategory}
        sx={{
          display: "flex",
          gap: 2,
          mt: 4,
        }}
      >
        <TextField
          label="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Родитель</InputLabel>

          <Select
            value={parentId}
            label="Родитель"
            onChange={(e) => setParentId(e.target.value)}
          >
            <MenuItem value="">Без родителя</MenuItem>

            {renderCategories(categories)}
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            deleteCategory={deleteCategory}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
