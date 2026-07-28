import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { useFormik, FormikProvider, FieldArray } from "formik";
import * as Yup from "yup";
import {
  useCreateProductMutation,
  useGetBrandsQuery,
  useGetCategoriesQuery,
} from "../../app/api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MultiImageUploader from "../components/MultiImageUploader";

const ProductCreate = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [createProduct, { isLoading, isSuccess, isError, error }] =
    useCreateProductMutation();

  const validationSchema = Yup.object({
    name: Yup.string().required("Введите название"),

    price: Yup.number()
      .required("Введите цену")
      .positive("Цена должна быть больше 0"),

    brandId: Yup.string().required("Выберите бренд"),

    categoryId: Yup.string().required("Выберите категорию"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      images: [],

      variants: [],
    },

    validationSchema,

    onSubmit: async (values) => {
      await createProduct({
        name: values.name,

        description: values.description,

        price: Number(values.price),

        images: images,

        brandId: values.brandId,

        categoryId: values.categoryId,

        variants: values.variants,
      });

      // navigate("/admin/products");
    },
  });

  const { data: brands = [] } = useGetBrandsQuery();
  const { data: categories = [] } = useGetCategoriesQuery();

  const renderCategoryOptions = (categories, level = 0) => {
    return categories.flatMap((category) => [
      <MenuItem key={category.id} value={category.id}>
        {"— ".repeat(level)}
        {category.name}
      </MenuItem>,

      ...(category.children?.length
        ? renderCategoryOptions(category.children, level + 1)
        : []),
    ]);
  };
  return (
    <>
      {isLoading && (
        <LinearProgress aria-label="Loading…" variant="query" sx={{ mb: 2 }} />
      )}

      <Snackbar open={isSuccess || isError} autoHideDuration={6000}>
        <Alert
          severity={isSuccess ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isSuccess ? "Успешно добавлено" : isError ? "Ошибка" : ""}
        </Alert>
      </Snackbar>

      <FormikProvider value={formik}>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
            }}
          >
            Добавить товар
          </Typography>

          <TextField
            fullWidth
            label="Название "
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.nameRu && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              mb: 2,
            }}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Описание "
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            sx={{
              mb: 2,
            }}
          />

          <TextField
            fullWidth
            type="number"
            label="Цена"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            sx={{
              mb: 3,
            }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Бренд</InputLabel>

            <Select
              name="brandId"
              value={formik.values.brandId}
              label="Бренд"
              onChange={formik.handleChange}
            >
              {brands?.map((brand) => (
                <MenuItem key={brand.id} value={brand.id}>
                  {brand.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Категория</InputLabel>

            <Select
              name="categoryId"
              value={formik.values.categoryId}
              label="Категория"
              onChange={formik.handleChange}
            >
              {renderCategoryOptions(categories ?? [])}
            </Select>
          </FormControl>
          <MultiImageUploader value={images} onChange={setImages} />
          <FieldArray name="variants">
            {({ push, remove }) => (
              <Box>
                <Typography>Варианты</Typography>

                {formik.values.variants.map((variant, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <TextField
                      label="Размер"
                      name={`variants.${index}.size`}
                      value={formik.values.variants[index].size}
                      onChange={formik.handleChange}
                    />

                    <TextField
                      label="Цвет"
                      name={`variants.${index}.color`}
                      value={formik.values.variants[index].color}
                      onChange={formik.handleChange}
                    />

                    <Button color="error" onClick={() => remove(index)}>
                      Удалить
                    </Button>
                  </Box>
                ))}

                <Button
                  onClick={() =>
                    push({
                      size: "",
                      color: "",
                    })
                  }
                >
                  + Добавить вариант
                </Button>
              </Box>
            )}
          </FieldArray>

          <Button type="submit" variant="contained" size="large">
            Создать товар
          </Button>
        </Box>
      </FormikProvider>
    </>
  );
};

export default ProductCreate;
