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

  const addCategory = async () => {
    if (!name.trim()) return;

    try {
      await createCategory({
        name,

        parentId: parentId || null,
      }).unwrap();

      setName("");

      setParentId("");
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) return "Загрузка...";

  const CategoryItem = ({ category, level = 0, deleteCategory }) => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 2,
            mb: 1,
            ml: level * 4, // отступ для вложенности
          }}
        >
          <Box>
            <Typography>{category.name}</Typography>

            {/* <Typography color="text.secondary">{category.fullPath}</Typography> */}
          </Box>

          <IconButton color="error" onClick={() => deleteCategory(category.id)}>
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M17.75 7.75L15.755 19.096C15.6736 19.5594 15.4315 19.9792 15.0712 20.2817C14.7109 20.5842 14.2555 20.75 13.785 20.75H5.715C5.24454 20.75 4.78913 20.5842 4.42882 20.2817C4.06852 19.9792 3.82639 19.5594 3.745 19.096L1.75 7.75M18.75 4.75H13.125M13.125 4.75V2.75C13.125 2.21957 12.9143 1.71086 12.5392 1.33579C12.1641 0.960714 11.6554 0.75 11.125 0.75H8.375C7.84457 0.75 7.33586 0.960714 6.96079 1.33579C6.58571 1.71086 6.375 2.21957 6.375 2.75V4.75M13.125 4.75H6.375M0.75 4.75H6.375"
                stroke="#FF0000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </svg>
          </IconButton>
        </Box>

        {category.children?.map((child) => (
          <CategoryItem
            key={child.id}
            category={child}
            level={level + 1}
            deleteCategory={deleteCategory}
          />
        ))}
      </>
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

        <Button variant="contained" onClick={addCategory}>
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
